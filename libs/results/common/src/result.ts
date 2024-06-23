import {
  success,
  failure,
  must,
  mustAsync,
  match,
  matchAsync,
} from "./internal";

export type Result<T, Err = Error> = Success<T> | Failure<Err>;

export type Success<T> = {
  ok: true;
  value: T;
};

export type Failure<Err> = {
  ok: false;
  error: Err;
};

export const Result = {
  success,
  failure,
  must,
  mustAsync,
  match,
  matchAsync,
};
