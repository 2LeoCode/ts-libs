import { ReadableStreamLike } from "@ts-libs/libs-streams-common";

export async function fromStream<T>(
  stream: ReadableStreamLike<T>,
): Promise<T[]> {
  const reader = stream.getReader();
  const chunks: T[] = [];
  let done = false;

  while (!done)
    done = await reader.read().then((res) => {
      if (res.value !== undefined) chunks.push(res.value);
      return res.done;
    });
  return chunks;
}
