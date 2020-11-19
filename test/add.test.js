import add from '../src/add.js'
import chai from 'chai'

const expect = chai.expect

describe("add", () => {
  it("adds positive number to positive number", () =>{
      expect(add(3,6)).to.be.equal(9);
    });

  it("adds positive number to negative number", () =>{
    expect(add(3,-6)).to.be.equal(-3);
  });
});