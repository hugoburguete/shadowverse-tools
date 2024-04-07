import { capitalizeFirstLetter } from './string';

describe('string utils', () => {
  describe('capitalizeFirstLetter', () => {
    it('capitalizes the first letter', () => {
      const string = 'hello World';
      expect(capitalizeFirstLetter(string)).toBe('Hello World');
    });
  });
});
