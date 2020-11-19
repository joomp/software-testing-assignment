import add from '../src/add.js'
import chai from 'chai'

const expect = chai.expect

describe("add", () => {
  // Accuracy for comparing floating-point numbers
  let delta = 0.001;

  describe("add integers", () => {
    it("positive Numbers", () =>{
        expect(add(3,6)).to.be.equal(9);
      });

    it("negative Numbers", () =>{
      expect(add(-3,-6)).to.be.equal(-9);
    });

    it("positive and negative Numbers", () =>{
      expect(add(3,-6)).to.be.equal(-3);
      expect(add(-6,3)).to.be.equal(-3);
    });
  });

  describe("add floats", () => {
    it("positive Numbers", () =>{
        expect(add(0.3, 0.6)).to.be.approximately(0.9, delta);
      });

    it("negative Numbers", () =>{
      expect(add(-0.3, -0.6)).to.be.approximately(-0.9, delta);
    });

    it("positive and negative Numbers", () =>{
      expect(add(0.3, -0.6)).to.be.approximately(-0.3, delta);
      expect(add(-0.6, 0.3)).to.be.approximately(-0.3, delta);
    });
  });

  describe("add integers with floats", () => {
    it("positive Numbers", () =>{
        expect(add(0.3, 6)).to.be.approximately(6.3, delta);
        expect(add(6, 0.3)).to.be.approximately(6.3, delta);
      });

    it("negative Numbers", () =>{
      expect(add(-0.3, -6)).to.be.approximately(-6.3, delta);
      expect(add(-6, -0.3)).to.be.approximately(-6.3, delta);
    });

    it("positive and negative Numbers", () =>{
      expect(add(-3, 0.6)).to.be.approximately(-2.4, delta);
      expect(add(6, -0.3)).to.be.approximately(5.7, delta);
      expect(add(-3.2, 0.8)).to.be.approximately(-2.4, delta);
      expect(add(-2.6, 3)).to.be.approximately(0.4, delta);
    });
  });

  describe("add 0", () => {
    it("positive Number and 0", () =>{
      expect(add(3, 0)).to.be.equal(3);
      expect(add(0, 3)).to.be.equal(3);
      expect(add(0, 0.3)).to.be.approximately(0.3, delta);
      expect(add(0.3, 0)).to.be.approximately(0.3, delta);
    });

    it("negative Number and 0", () =>{
      expect(add(-3, 0)).to.be.equal(-3);
      expect(add(0, -3)).to.be.equal(-3);
      expect(add(0, -0.3)).to.be.approximately(-0.3, delta);
      expect(add(-0.3, 0)).to.be.approximately(-0.3, delta);
    });

    it("0 and 0", () =>{
      expect(add(0, 0)).to.be.equal(0);
    });
  });

  describe("add special Numbers", () => {
    it("NaN and normal Number", () =>{
      expect(add(NaN, -6)).to.be.NaN;
      expect(add(9999, NaN)).to.be.NaN;
    });

    it("NaN and NaN", () =>{
      expect(add(NaN, NaN)).to.be.NaN;
    });

    it("Infinity and normal Number", () =>{
      expect(add(3, Infinity)).to.be.equal(Infinity);
      expect(add(0.3, Infinity)).to.be.equal(Infinity);
      expect(add(Infinity, -3)).to.be.equal(Infinity);
      expect(add(Infinity, 0)).to.be.equal(Infinity);
    });

    describe("Add Infinity with Infinity", () =>{
      // Not part of the testing plan
      it("Infinity and Infinity", () =>{
        expect(add(Infinity, Infinity)).to.be.equal(Infinity);
      });

      it("-Infinity and -Infinity", () =>{
        expect(add(-Infinity, -Infinity)).to.be.equal(-Infinity);
      });

      it("-Infinity and Infinity", () =>{
        expect(add(-Infinity, Infinity)).to.be.NaN;
      });
    });

    it("negative Infinity and normal Number", () =>{
      expect(add(3, -Infinity)).to.be.equal(-Infinity);
      expect(add(0.3, -Infinity)).to.be.equal(-Infinity);
      expect(add(-Infinity, -3)).to.be.equal(-Infinity);
      expect(add(Infinity, 0)).to.be.equal(Infinity);
    });

    it("Infinity and NaN", () =>{
      expect(add(Infinity, NaN)).to.be.NaN;
      expect(add(-Infinity, NaN)).to.be.NaN;
      expect(add(NaN, Infinity)).to.be.NaN;
      expect(add(NaN, -Infinity)).to.be.NaN;
    });
  });

});