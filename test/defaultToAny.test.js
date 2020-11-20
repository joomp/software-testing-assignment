import defaultToAny from '../src/defaultToAny.js'
import chai from 'chai'

const expect = chai.expect

describe("defaultToAny", () => {
  describe("value is not null, NaN or undefined", () => {
    it("returns value", () => {
      expect(defaultToAny(10, 20, 30)).to.be.equal(10);
    });
  });

  describe("no default is NaN, null or undefined", () => {
    [null, NaN, undefined].forEach(e => {
      it(`returns first default when value is ${e}`, () => {
        expect(defaultToAny(e, 10, 20)).to.be.equal(10);
      });
    });
  });

  describe("first default is NaN, null or undefined, rest are not", () => {
    [null, NaN, undefined].forEach(e => {
      [null, NaN, undefined].forEach(d => {
        it(`returns second default when value is ${e} and first default is ${d}`, () => {
          expect(defaultToAny(e, d, 10, 20)).to.be.equal(10);
        });
      });
    });
  });

  describe("each default is NaN, null or undefined", () => {
    [null, undefined].forEach(e => {
      it(`returns last default value: ${e}`, () => {
        expect(defaultToAny(null, undefined, null, NaN, e)).to.be.equal(e);
      });
    });
    it(`returns last default value: NaN`, () => {
      expect(defaultToAny(null, undefined, null, NaN)).to.be.NaN;
    });
  });
});
