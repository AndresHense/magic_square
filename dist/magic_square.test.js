"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auxiliars_1 = require("./auxiliars");
const auxiliars_2 = require("./auxiliars");
const auxiliars_3 = require("./auxiliars");
const auxiliars_4 = require("./auxiliars");
const magic_square_1 = __importDefault(require("./magic_square"));
function isContained(a, b) {
    let res = false;
    for (let j = 0; j < b.length; j++) {
        res = res || (a.length === b[j].length &&
            a.every((v, i) => (v == b[j][i])));
    }
    return res;
}
//asumo tienen misma longitud
function isMatrixEqual(a, b) {
    let res = false;
    for (let i = 0; i < a.length; i++) {
        res = res || isContained(a[i], [b[i]]);
    }
    return res;
}
/*
const C=[6,1,6];

const p=[0,0,0];
let existe=false;
let sol=[];
function setter(p){
    sol=[...p];
}
test('try 6,12,6',()=>{
    subset_sum(C,p,C.length-1,12,false,setter)
    console.log(sol)
    expect(isContained(sol,[[1,0,1],[0,1,0]])).toBeTruthy()
});*/
test('equals matrixs', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(isMatrixEqual(s, p)).toBeTruthy();
});
test('not equals matrixs', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(!isMatrixEqual(s, result)).toBeTruthy();
});
test('isPartialMagic', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(auxiliars_1.isPartialyMagic(result, 1, 3)).toBeTruthy();
});
test('isPartialMagic2', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(auxiliars_1.isPartialyMagic(result, 2, 3)).toBeTruthy();
});
test('isPartialMagic3', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(auxiliars_1.isPartialyMagic(result, 0, 3)).toBeTruthy();
});
test('isNotPartialMagic', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(!auxiliars_1.isPartialyMagic(p, 2, 3)).toBeTruthy();
});
test('isMagic', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(auxiliars_2.isMagic(result, 3)).toBeTruthy();
});
test('isNotMagic', () => {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    const p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    expect(!auxiliars_2.isMagic(p, 3)).toBeTruthy();
});
test('msquare with n: 3', () => {
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    let s = magic_square_1.default(3);
    console.log(s);
    expect(isMatrixEqual(s, result)).toBeTruthy();
});
test('isRepited', () => {
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    expect(auxiliars_4.isRepited(result, 5)).toBeTruthy();
});
test('isNotRepited', () => {
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    expect(!auxiliars_4.isRepited(result, 12)).toBeTruthy();
});
test('posibles1', () => {
    const result = [
        [1, 2, 3],
        [6, 5, 4],
        [2, 2, 2]
    ];
    const ar = auxiliars_3.posibles(result, 3, 2, 2);
    //console.log(ar);
    const res = [7, 8, 9];
    expect(isContained(ar, [res])).toBeTruthy();
});
test('posibles2', () => {
    const result = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    const res = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(isContained(auxiliars_3.posibles(result, 3, 2, 2), [res])).toBeTruthy();
});
test('posibles3', () => {
    const result = [
        [9, 2, 1],
        [6, 5, 4],
        [8, 3, 7]
    ];
    const res = [];
    expect(isContained(auxiliars_3.posibles(result, 3, 2, 2), [res])).toBeTruthy();
});
test('posibles4', () => {
    const result = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const expected = [9];
    const res = auxiliars_3.posibles(result, 3, 2, 1);
    //console.log(res);
    expect(isContained(res, [expected])).toBeTruthy();
});
