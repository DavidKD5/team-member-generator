const Intern = require("../../lib/Intern.js");

test("adds new intern", () => {
  const obj = new Intern("John", "1", "john@abc.net", "Hogwarts");
  expect(obj.name).toBe("John");
  expect(obj.id).toBe("1");
  expect(obj.email).toBe("john@abc.net");
  expect(obj.school).toBe("Hogwarts");
});
