import test from 'tape';
import { distribute } from './index';

test('distribure Fuction: Should exist.', (assert) => {
  const actual = typeof distribute;
  const expected = 'function';
  assert.equal(expected, actual);
  assert.end();
});

test('distribure Fuction: Given an index and a grid box size should return the correct px offset.', (assert) => {
  const x = 5;
  const size = 100;
  const actual = distribute(x, size);
  const expected = 505;
  assert.equal(expected, actual);
  assert.end();
});
