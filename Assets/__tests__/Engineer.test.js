const Engineer = require("../../lib/Engineer.js");

test("adds new engineer", () => {
  const obj = new Engineer("John", "1", "john@abc.net", "johnny1");
  expect(obj.name).toBe("John");
  expect(obj.id).toBe("1");
  expect(obj.email).toBe("john@abc.net");
  expect(obj.github).toBe("johnny1");
});
