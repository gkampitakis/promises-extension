import { chunkArray, isArray, isObject } from './';

describe('Utils', () => {
  describe('isArray', () => {
    it('Should return true', () => {
      expect(isArray([])).toBe(true);
    });
    it('Should return true', () => {
      expect(isArray([1, 2, 3, 4, 5, 6])).toBe(true);
    });
    it('Should return false', () => {
      expect(isArray({})).toBe(false);
    });
    it('Should return false', () => {
      expect(isArray(() => { })).toBe(false);
    });
    it('Should return false', () => {
      expect(isArray(10)).toBe(false);
    });
    it('Should return false', () => {
      //@ts-ignore
      expect(isArray()).toBe(false);
    });
  });
  describe('isObject', () => {
    it('Should return true', () => {
      expect(isObject({})).toBe(true);
    });
    it('Should return true', () => {
      expect(
        isObject({
          test: 'test',
          mock: 'mockObject'
        })
      ).toBe(true);
    });
    it('Should return false', () => {
      expect(isObject([])).toBe(false);
    });
    it('Should return false', () => {
      expect(isObject(() => { })).toBe(false);
    });
    it('Should return false', () => {
      expect(isObject(10)).toBe(false);
    });
    it('Should return false', () => {
      // @ts-ignore
      expect(isObject()).toBe(false);
    });
  });
  describe('chunkArray', () => {
    it('Should throw error if no object provided', () => {
      try {
        //@ts-ignore
        chunkArray({}, 2);
      } catch (error) {
        expect(error.message).toBe('Provide an array');
      }
    });

    it('Should return an array containing 3 chunks', () => {
      const array = [1, 2, 3];
      expect(chunkArray(array, 1).length).toBe(3);
    });

    it('Should return an array containing 1 chunk', () => {
      const array = [1, 2, 3];
      expect(chunkArray(array, 10).length).toBe(1);
    });

    it('Should return an array containing 1 chunk', () => {
      const array = [1, 2, 3];
      expect(chunkArray(array, 0).length).toBe(1);
      expect(chunkArray(array).length).toBe(1);
    });

    it('Should return an an array containing an empty array', () => {
      const array = [];

      const res1 = chunkArray(array, 1),
        res2 = chunkArray(array, 0);

      expect(res1.length).toBe(1);
      expect(res1[0].length).toBe(0);
      expect(res2.length).toBe(1);
      expect(res2[0].length).toBe(0);
    });

    it('Should split array into 4 chunks', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const res = chunkArray(array, 3);
      expect(res.length).toBe(4);
      expect(res[0]).toEqual([1, 2, 3]);
      expect(res[1]).toEqual([4, 5, 6]);
      expect(res[2]).toEqual([7, 8, 9]);
      expect(res[3]).toEqual([10]);
    });
  });
});
