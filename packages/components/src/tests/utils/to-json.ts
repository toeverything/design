import type renderer from 'react-test-renderer';
import { expect } from 'vitest';

export function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}
export default toJson;
