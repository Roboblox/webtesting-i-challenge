const enhancer = require("./enhancer.js");
// test away!

describe("repair()", () => {
  const item = {
    name: "Repair item",
    enhancement: 5,
    durability: 20,
  };
  it("restore item durability to 100", () => {
    const expected = 100;
    const result = enhancer.repair(item);
    expect(result.durability).toBe(expected);
  });
});

describe("success()", () => {
  it("increas item enhancement by 1 if enhancement is less than 20", () => {
    const item = {
      name: "Success item less than 20",
      enhancement: 15,
      durability: 20,
    };
    const expected = 16;
    const result = enhancer.success(item);
    expect(result.enhancement).toBe(expected);
  });
  it("no change if enhancement is 20", () => {
    const item = {
      name: "Success item equal to 20",
      enhancement: 20,
      durability: 20,
    };
    const expected = 20;
    const result = enhancer.success(item);
    expect(result.enhancement).toBe(expected);
  });
});

describe("fail()", () => {
  it("decrease item durability by 5 if enhancement less than 15", () => {
    const item = {
      name: "Fail item less than 15",
      enhancement: 10,
      durability: 20,
    };
    const expected = 15;
    const result = enhancer.fail(item);
    expect(result.durability).toBe(expected);
  });

  it("decreas item durability by 10 if enhancement equal or more than 15", () => {
    const item = {
      name: "Fail item 15 or less than 16",
      enhancement: 15,
      durability: 20,
    };
    const expected = 10;
    const result = enhancer.fail(item);
    expect(result.durability).toBe(expected);
  });

  it("decreases item durability by 1 if enhancement is greater than 16", () => {
    const item = {
      name: "Fail item more than 16",
      enhancement: 17,
      durability: 20,
    };
    const expected = 19;
    const result = enhancer.fail(item);
    expect(result.durability).toBe(expected);
  });
});
