import defaultTo from '../src/defaultTo.js'
import chai from 'chai'

const expect = chai.expect

describe("defaultTo", () => {
  describe("default is expected", () => {
    it("value is null", () =>{
      expect(defaultTo(null, 10)).to.be.equal(10);
    });

    it("value is undefined", () =>{
      expect(defaultTo(undefined, 10)).to.be.equal(10);
    });

    it("value is NaN", () =>{
      expect(defaultTo(NaN, 10)).to.be.equal(10);
    });
  });

  describe("value is expected", () => {
    it("value is not null, NaN or undefined", () =>{
      expect(defaultTo(10, 20)).to.be.equal(10);
    });
  });
});
