import { ArrayBuffer } from '../src';

describe('ArrayBuffer', () => {
  it('should ArrayBuffer', () => {
    const buffer = new ArrayBuffer(8);

    expect(buffer.toString()).toBe('[object ArrayBuffer]');
  });
});
