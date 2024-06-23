import type { Result } from "../result";

export type ResultMatcher<T, Err> = {
  ok(value: T): void;
  err(error: Err): void;
};

export type ResultAsyncMatcher<T, Err> = {
  ok(value: T): PromiseLike<void>;
  err(error: Err): PromiseLike<void>;
};

export function match<T, Err>(
  result: Result<T, Err>,
  matcher: ResultMatcher<T, Err>,
) {
  if (result.ok) return matcher.ok(result.value);
  return matcher.err(result.error);
}

export async function matchAsync<T, Err>(
  result: Result<T, Err>,
  matcher: ResultAsyncMatcher<T, Err>,
) {
  if (result.ok) await matcher.ok(result.value);
  else await matcher.err(result.error);
}
