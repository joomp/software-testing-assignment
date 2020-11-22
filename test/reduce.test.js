import reduce from '../src/reduce.js'
import chai from 'chai'

const expect = chai.expect

describe("reduce", () => {
  const iteratee = (acc, e) => acc + e;

  it('collection is empty array, with accumulator', () => {
    const collection = [];
    const accumulator = 9;
    expect(reduce(collection, iteratee, accumulator)).to.be.equal(accumulator);
  });

  it('collection is empty array, no accumulator', () => {
    const collection = [];
    expect(reduce(collection, iteratee)).to.be.undefined;
  });

  describe('collection is array with elements, no accumulator', () => {
    it('1 element', () => {
      const collection = [1];
      expect(reduce(collection, iteratee)).to.be.equal(1);
    });
    it('2 elements', () => {
      const collection = [1, 2];
      expect(reduce(collection, iteratee)).to.be.equal(3);
    });
    it('many elements', () => {
      const collection = [1, 2, 3, 4, 5, 6, 7];
      expect(reduce(collection, iteratee)).to.be.equal(28);
    });
  });

  describe('collection is array with elements with accumulator', () => {
    const accumulator = 1;
    it('1 element', () => {
      const collection = [1];
      expect(reduce(collection, iteratee, accumulator)).to.be.equal(2);
    });
    it('2 elements', () => {
      const collection = [1, 2];
      expect(reduce(collection, iteratee, accumulator)).to.be.equal(4);
    });
    it('many elements', () => {
      const collection = [1, 2, 3, 4, 5, 6, 7];
      expect(reduce(collection, iteratee, accumulator)).to.be.equal(29);
    });
  });

  it('collection is empty object with accumulator', () => {
    const collection = {};
    const accumulator = 9;
    expect(reduce(collection, iteratee, accumulator)).to.be.equal(accumulator);
  });

  it('collection is empty object, no accumulator', () => {
    const collection = {};
    expect(reduce(collection, iteratee)).to.be.undefined;
  });

  describe('collection object with some attributes, no accumulator', () => {
    it('1 element', () => {
      const collection = {a: 1};
      expect(reduce(collection, iteratee)).to.be.equal(1);
    });
    it('2 elements', () => {
      const collection = {
        a: 1,
        b: 2
      };
      expect(reduce(collection, iteratee)).to.be.equal(3);
    });
    it('many elements', () => {
      const collection = {
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7
      };
      expect(reduce(collection, iteratee)).to.be.equal(28);
    });
  });

  describe('collection object with some attributes with accumulator', () => {
    const accumulator = 1;
    it('1 attribute', () => {
      const collection = {a: 1};
      expect(reduce(collection, iteratee, accumulator)).to.be.equal(2);
    });
    it('2 attributes', () => {
      const collection = {
        a: 1,
        b: 2
      };
      expect(reduce(collection, iteratee, accumulator)).to.be.equal(4);
    });
    it('many attributes', () => {
      const collection = {
        uno: 1,
        dos: 2,
        tres: 3,
        cuatro: 4,
        cinco: 5,
        seis: 6,
        siete: 7
      };
      expect(reduce(collection, iteratee, accumulator)).to.be.equal(29);
    });
  });
});