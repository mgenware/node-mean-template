import * as assert from 'assert';
import { add } from '../dist/main.js';

it('Add', () => {
  assert.strictEqual(add(1, -9), -8);
});
