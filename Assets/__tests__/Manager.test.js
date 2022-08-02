const Manager = require("../../lib/Manager.js");

test("adds new manager", () => {
  const obj = new Manager("John", "1", "john@abc.net", "1234567");
  expect(obj.name).toBe("John");
  expect(obj.id).toBe("1");
  expect(obj.email).toBe("john@abc.net");
  expect(obj.officeNumber).toBe("1234567");
});
