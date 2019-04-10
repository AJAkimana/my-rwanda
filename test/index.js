import * as assert from 'assert';
import maskRWPhone from '../src/index';

const testSamples = [
  { input: 'abc', expectedResult: 'abc', description: 'should return pristine value when receiving "abc"' },
  { input: 'abc123456712', expectedResult: 'abc123456712', description: 'should return pristine value when receiving "abc123456712"' },
  { input: 'abcdefghijsd', expectedResult: 'abcdefghijsd', description: 'should return pristine value when receiving "abcdefghijsd"' },
  { input: '123456789012', expectedResult: '(+123) 456-789-012', description: 'should return (+123) 456-789-012' },
  { input: '543126098723', expectedResult: '(+543) 126-098-723', description: 'should return (+543) 126-098-723' },
];

describe('Array', () => {
  testSamples.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(maskRWPhone(sample.input), sample.expectedResult);
    });
  });
});
