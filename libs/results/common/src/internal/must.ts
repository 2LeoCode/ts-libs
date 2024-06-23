import type { Result } from "../result";

export function must<T>(result: Result<T, unknown>): T {
  if (!result.ok) throw result.error;
  return result.value;
}

export async function mustAsync<T>(result: Result<T, unknown>): Promise<T> {
  return must(result);
}
