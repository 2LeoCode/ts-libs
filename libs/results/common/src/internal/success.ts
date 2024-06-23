import type { Success } from "../result";

export function success<T>(value: T): Success<T> {
  return { ok: true, value };
}
