import type { Failure } from "../result";

export function failure<Err>(error: Err): Failure<Err> {
  return { ok: false, error };
}
