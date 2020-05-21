import { Map } from '../src';

describe('Map', () => {
  it('should Map', () => {
    const myMap = new Map<string, string>();

    myMap.set('test', 'my value');

    expect(myMap.get('test')).toBe('my value');
  });
});
