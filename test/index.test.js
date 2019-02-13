import {formatter} from '../src/index'

test('should convert single digits', () => {
  const result = formatter(1);
  expect(result).toBe('1');
});
