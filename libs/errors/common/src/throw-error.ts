import { error } from "./error";

export function throwError(message: string, options?: ErrorOptions): never {
  throw error(message, options);
}
