import type { Path, PathValue } from "./types";

/**
 *
 * @param obj
 * @param key
 * @returns
 */
export function deepPropAccess<T, P extends Path<T>>(
  obj: T,
  key: P
): PathValue<T, P> {
  const keys: any =
    typeof key === "string" || key instanceof String ? key.split(".") : key;

  const length = keys.length;

  Array.from({ length }, (_, prop) => (obj = obj ? obj[keys[prop]] : null));

  return obj as PathValue<T, P>;
}
