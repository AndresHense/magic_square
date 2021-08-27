import { magic_list } from "./magic_list";
import { isContained,isMatrixEqual } from "./test_auxiliars";


test("magic_list1",()=>{
    const s=magic_list(3);
    //console.log(s)
    expect(s.reduce((a,b)=>a+b)).toBe(15);
})

test("magic_list2",()=>{
    const s=magic_list(4);
    //console.log(s)
    expect(s.reduce((a,b)=>a+b)).toBe(34);
})