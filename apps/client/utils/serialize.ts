import superjson from 'superjson';
import { Serialized } from '../types';

export function serialize<T>(value: T): Serialized<T> {
  const { json } = superjson.serialize(value);

  return json as any;
}
