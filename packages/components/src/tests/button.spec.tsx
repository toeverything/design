import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';

import { Button } from '../button';
import toJson from './utils/to-json';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Button type="primary">This is primary button</Button>
  );
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  tree.props.type = 'primary';

  tree = toJson(component);
  expect(tree).toMatchSnapshot();

  tree.props.type = 'plain';

  tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
