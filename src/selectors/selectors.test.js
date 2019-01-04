import expect from 'expect';
import {categoriesFormattedForDropdown} from './selectors';

describe('Category Selectors', () => {
  describe('categoriesFormattedForDropdown', () => {
    it('should return category data formatted for use in a dropdown', () => {
      const categories = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen',firstName: 'Scott',lastName: 'Allen'}
      ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(categoriesFormattedForDropdown(categories)).toEqual(expected);
    });
  });
});
