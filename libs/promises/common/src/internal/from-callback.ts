import { promise } from "../promise";

export function fromCallback<
  Args extends any[],
  CallbackArgs extends any[],
  Func extends (...args: [...Args, (...args: CallbackArgs) => any]) => any,
>(func: Func, ...args: Args): Promise<CallbackArgs> {
  return promise((resolve) => {
    func(...args, (...res) => resolve(res));
  });
}
