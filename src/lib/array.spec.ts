import { toggleArrayItem } from './array';

describe('array utils', () => {
  describe('toggleArrayItem', () => {
    it('adds item to an array', () => {
      const arr = ['a'];
      expect(toggleArrayItem<string>('b', arr)).toStrictEqual(['a', 'b']);
    });

    it('removes item from an array', () => {
      const arr = ['a', 'b'];
      expect(toggleArrayItem<string>('b', arr)).toStrictEqual(['a']);
    });
  });
});
