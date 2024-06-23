export function error(message: string, options?: ErrorOptions) {
  return new Error(message, options);
}
