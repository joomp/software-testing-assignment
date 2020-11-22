import filter from '../src/filter.js'
import chai from 'chai'

const expect = chai.expect

describe("filter", () => {
  it('predicative is truthy for all elements', () => {
    const predicative = (value, index, array) => true;
    const arr = [2, 5, 5, 9, NaN, "str"]
    expect(filter(arr, predicative)).to.be.deep.equal(arr);
  });

  it('predicative is falsy for all elements', () => {
    const predicative = (value, index, array) => false;
    const arr = [2, 5, 5, 9, NaN, "str"]
    expect(filter(arr, predicative)).to.be.empty;
  });

  it('predicative is truthy for some elements', () => {
    const predicative = (value, index, array) => value > 4;
    const arr = [2, 5, 5, 9, NaN, "str"]
    expect(filter(arr, predicative)).to.be.deep.equal([5, 5, 9]);
  });

  it('array is empty', () => {
    const predicative = (value, index, array) => true;
    const arr = []
    expect(filter(arr, predicative)).to.be.empty;
  });

});