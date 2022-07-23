export type BuildPath<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? K | `${K}.${BuildPath<T[K], Exclude<keyof T[K], keyof any[]>>}`
      : K | `${K}.${BuildPath<T[K], keyof T[K]>}`
    : K
  : never;

export type Path<T> = BuildPath<T, keyof T> | keyof T;

export type PathValue<
  T,
  P extends Path<T>
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? PathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;
