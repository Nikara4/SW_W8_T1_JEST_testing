const sum = require("./index");

describe("Sum function tests", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should work with misc numbers", () => {
    const num1 = 34;
    const num2 = 66;

    const result = sum(num1, num2);
    expect(result).toEqual(100);
  });

  it("should concat strings", () => {
    const str1 = "hello";
    const str2 = "world";

    const result = sum(str1, str2);
    expect(result).toEqual("helloworld");
  });

  it("should treat null as 0", () => {
    const num1 = null;
    const num2 = null;

    expect(sum(num1, num2)).toEqual(0);
  });

  it("should treat undefined as NaN", () => {
    const num1 = undefined;
    const num2 = undefined;

    expect(sum(num1, num2)).toEqual(NaN);
  });

  it("should return NaN when no arguments", () => {
    expect(sum()).toEqual(NaN);
  });

  it("should return NaN when mixed arguments", () => {
    const str1 = "hello";
    const str2 = 69;

    const result = sum(str1, str2);
    expect(result).toEqual(NaN);
  });
});
