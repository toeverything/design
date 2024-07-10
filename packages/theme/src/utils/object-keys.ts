export function objectKeys<Key extends string>(obj: Record<Key, any>) {
  return Object.keys(obj) as Key[];
}
