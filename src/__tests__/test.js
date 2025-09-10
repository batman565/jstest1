import { getHealthStatus } from "../index.js";
test("test1", () => {
  const character = { name: "Mar", health: 40 };
  expect(getHealthStatus(character)).toBe("wounded");
});
test("test2", () => {
  const character = { name: "Mar", health: 10 };
  expect(getHealthStatus(character)).toBe("critical");
});
test("test3", () => {
  const character = { name: "Mar", health: 51 };
  expect(getHealthStatus(character)).toBe("healthy");
});
