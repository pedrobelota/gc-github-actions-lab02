import test from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../app.js";

test("gera uma saudação", () => {
  assert.equal(greeting("Pedro"), "Olá, Pedro!");
});
