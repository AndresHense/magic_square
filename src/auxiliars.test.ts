import { magic_num } from "./auxiliars";

test("magic num of 3",()=>{
    expect(magic_num(3)).toBe(15);
})
test("magic num of 4",()=>{
    expect(magic_num(4)).toBe(34);
})