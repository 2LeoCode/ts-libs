export type Resolver<T> = (value: T) => void;

export type PromiseWithResolvers<T, Err> = [
  Promise<T>,
  Resolver<T>,
  Resolver<Err>,
];
