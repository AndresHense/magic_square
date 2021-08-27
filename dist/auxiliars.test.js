"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auxiliars_1 = require("./auxiliars");
test("magic num of 3", () => {
    expect(auxiliars_1.magic_num(3)).toBe(15);
});
test("magic num of 4", () => {
    expect(auxiliars_1.magic_num(4)).toBe(34);
});
