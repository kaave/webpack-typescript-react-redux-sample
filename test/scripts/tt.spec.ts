import test from 'ava';
import sum from '../../app/scripts/tt';

test('sum', t => {
  t.truthy(sum(1, 2) === 3)
});
