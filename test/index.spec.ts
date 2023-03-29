import "mocha";
import { expect } from "chai";
import { add } from "../src/index";

describe("index test", () => {
  it("add(1,4,5) == 10", () => {
    expect(add(1, 4)).to.be.equal(5);
  });
  it("add(1,4,5) == 10", () => {
    expect(add(9, -2)).to.be.equal(7);
  });
  it("add(1,4,5) == 10", () => {
    expect(add(1, 4)).to.not.be.equal(1);
  });
  it("add(1,4,5) == 10", () => {
    expect(add(1, 4)).to.be.greaterThan(1);
  });
  it("add(1,4,5) == 10", () => {
    expect(add(1, 4)).to.be.lessThan(100000);
  });
});
