import assert from 'assert';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('Should return -1 when value is not presente', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
