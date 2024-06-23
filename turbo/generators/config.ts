import fs from "fs/promises";
import { toKebabCase } from "js-convert-case";
import type { PlopTypes } from "@turbo/gen";

type ModuleGeneratorConfig = {
  name: string;
  description: string;
};

function registerModuleGenerator(
  plop: PlopTypes.NodePlopAPI,
  config: ModuleGeneratorConfig,
) {
  plop.setGenerator(config.name, {
    description: config.description,
    prompts: [
      {
        name: "name",
        message: "Module name",
      },
    ],
    actions: [
      {
        type: "add",
        path: `libs/{{dashCase name}}/${config.name}/package.json`,
        templateFile: `templates/${config.name}/package.json.template`,
      },
      {
        type: "add",
        path: `libs/{{dashCase name}}/${config.name}/tsconfig.json`,
        templateFile: `templates/${config.name}/tsconfig.json.template`,
      },
      {
        type: "add",
        path: `libs/{{dashCase name}}/${config.name}/eslint.config.cjs`,
        templateFile: `templates/${config.name}/eslint.config.cjs.template`,
      },
      {
        type: "add",
        path: `libs/{{dashCase name}}/${config.name}/prettier.config.cjs`,
        templateFile: `templates/${config.name}/prettier.config.cjs.template`,
      },
      {
        type: "add",
        path: `libs/{{dashCase name}}/${config.name}/src/index.ts.template`,
      },
      {
        type: "update package.json",
        data: {
          kind: config.name,
        },
      },
    ],
  });
}

export default function (plop: PlopTypes.NodePlopAPI): void {
  plop.setActionType("update package.json", async (answers, config) => {
    const kind: string = (<any>config).data.kind;

    if (kind === "tests") return `[disabled for kind="tests"]`;

    const name = toKebabCase((<any>answers).name);

    const pack = JSON.parse(
      (await fs.readFile("package.json")).toString("utf-8"),
    );
    if (pack.exports === undefined) pack.exports = {};
    pack.exports[`./${kind}/${name}`] = {
      types: `./libs/${name}/${kind}/dist/index.d.ts`,
      import: `./libs/${name}/${kind}/dist/index.js`,
      node: `./libs/${name}/${kind}/dist/index.js`,
      require: `./libs/${name}/${kind}/dist/index.js`,
    };
    await fs.writeFile("package.json", JSON.stringify(pack, undefined, 2));
    return "/package.json";
  });
  registerModuleGenerator(plop, {
    name: "common",
    description: "Module that can be shared between NodeJS and browser",
  });
  registerModuleGenerator(plop, {
    name: "tests",
    description: "Module for unit tests in a NodeJs environment",
  });
}
