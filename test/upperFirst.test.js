import upperFirst from '../src/upperFirst.js'
import chai from 'chai'

const expect = chai.expect

describe("upperFirst", () => {
  describe("when first character is uppercase", () => {
    it("returns string unchanged", () => {
      const str = "Testing";
      expect(upperFirst(str)).to.be.equal(str);
    });
  });
  describe("when first character has no case", () => {
    it("returns string unchanged", () => {
      const str = "123 Testing";
      expect(upperFirst(str)).to.be.equal(str);
    });
  });
  describe("when string is empty", () => {
    it("returns string unchanged", () => {
      const str = "";
      expect(upperFirst(str)).to.be.equal(str);
    });
  });
  describe("when first character is lowercase", () => {
    const str = "testing";
    it("changes first character to uppercase", () => {
      expect(upperFirst(str)[0]).to.be.equal("T");
    });
    it("changes only the first character", () => {
      expect(upperFirst(str).substr(1)).to.be.equal(str.substr(1));
    });
  });
});
