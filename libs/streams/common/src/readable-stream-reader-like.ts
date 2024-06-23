export type ReadableStreamReaderLike<T> = {
  read(): Promise<ReadableStreamReadResult<T>>;
};
