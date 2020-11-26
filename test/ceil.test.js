import ceil from '../src/ceil.js'
import chai from 'chai'

const expect = chai.expect

describe("ceil", () => {
  describe("when number has asked precision returns number unchanged", () => {
    [
      [1200, -2],
      [120, -1],
      [12, 0],
      [1.2, 1],
      [0.12, 2],
    ].forEach(([num, precision]) => {
      it(`number: ${num}, precision: ${precision}`, () => {
        expect(ceil(num, precision)).to.be.equal(num);
      });
    });
    it(`default precision`, () => {
      expect(ceil(12)).to.be.equal(12);
    });
  });
  describe("when number has lower precision returns number unchanged", () => {
    [
      [1200, -2],
      [120, -1],
      [12, 0],
      [1.2, 1],
      [0.12, 2],
    ].forEach(([num, precision]) => {
      const p1 = precision + 1;
      it(`number: ${num}, precision: ${p1}`, () => {
        expect(ceil(num, p1)).to.be.equal(num);
      });
      const p2 = precision + 2;
      it(`number: ${num}, precision: ${p2}`, () => {
        expect(ceil(num, p2)).to.be.equal(num);
      });
    });
    it(`default precision`, () => {
      expect(ceil(120)).to.be.equal(120);
    });
  });
  describe("when number has higher precision rounds up to the precision", () => {
    [
      [1200, -4, 10000],
      [1200, -3, 2000],
      [120, -2, 200],
      [1.2, 0, 2],
      [0.12, 1, 0.2],
      [0.0012, 2, 0.01],
    ].forEach(([num, precision, expected]) => {
      it(`number: ${num}, precision: ${precision}`, () => {
        expect(ceil(num, precision)).to.be.equal(expected);
      });
    });
    it(`default precision`, () => {
      expect(ceil(0.12)).to.be.equal(1);
    });
  });
});
