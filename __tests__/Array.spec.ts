import { Array } from '../src';

describe('Array', () => {
  it('should Array', () => {
    const myArray = new Array(2);

    expect(myArray).toHaveLength(2);
  });
});
