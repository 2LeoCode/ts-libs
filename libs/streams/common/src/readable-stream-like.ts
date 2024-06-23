import { ReadableStreamReaderLike } from "./readable-stream-reader-like";

export type ReadableStreamLike<T> = {
  getReader(): ReadableStreamReaderLike<T>;
};
