const Employee = require("../../lib/Employee.js");

test("adds new employee", () => {
  const obj = new Employee("John", "1", "john@abc.net");
  expect(obj.name).toBe("John");
  expect(obj.id).toBe("1");
  expect(obj.email).toBe("john@abc.net");
});
