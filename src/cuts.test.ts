import { isMagicRow } from "./auxiliars";

test("magicRow",()=>{
    let ar=[[9,8,6],[0,0,0],[0,0,0]];
    expect(isMagicRow(ar,0,3)).toBeFalsy();
})
test("magicRow1",()=>{
    let ar=[[9,5,1],[0,0,0],[0,0,0]];
    expect(isMagicRow(ar,0,3)).toBeTruthy();
})
test("magicRow2",()=>{
    let ar=[[9,5,1],[8,3,4],[0,0,0]];
    expect(isMagicRow(ar,1,3)).toBeTruthy();
})
test("magicRow3",()=>{
    let ar=[[9,5,1],[8,3,4],[2,7,6]];
    expect(isMagicRow(ar,2,3)).toBeTruthy();
})
test("magicCol1",()=>{
    let ar=[[9,5,1],[1,3,4],[5,7,6]];
    expect(isMagicRow(ar,0,3)).toBeTruthy();
})
test("magicCol2",()=>{
    let ar=[[2,7,6],[9,5,1],[6,1,8]];
    expect(isMagicRow(ar,1,3)).toBeTruthy();
})
test("magicCol2",()=>{
    let ar=[[2,7,6],[9,5,1],[6,1,8]];
    expect(isMagicRow(ar,2,3)).toBeTruthy();
})
test("notmagicCol2",()=>{
    let ar=[[2,7,6],[9,5,1],[6,1,3]];
    expect(!isMagicRow(ar,2,3)).toBeTruthy();
})