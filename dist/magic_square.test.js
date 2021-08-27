"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const magic_square_1 = __importStar(require("./magic_square"));
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
    expect(magic_square_1.isPartialyMagic(result, 1, 3)).toBeTruthy();
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
    expect(magic_square_1.isPartialyMagic(result, 2, 3)).toBeTruthy();
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
    expect(magic_square_1.isPartialyMagic(result, 0, 3)).toBeTruthy();
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
    expect(!magic_square_1.isPartialyMagic(p, 2, 3)).toBeTruthy();
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
    expect(magic_square_1.isMagic(result, 3)).toBeTruthy();
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
    expect(!magic_square_1.isMagic(p, 3)).toBeTruthy();
});
test('msquare with n: 3', () => {
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
    magic_square_1.default(p, 0, -1, 3, false, setter);
    console.log(s);
    expect(isMatrixEqual(s, result)).toBeTruthy();
});
test('isRepited', () => {
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    expect(magic_square_1.isRepited(result, 5)).toBeTruthy();
});
test('isNotRepited', () => {
    const result = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8]
    ];
    expect(!magic_square_1.isRepited(result, 12)).toBeTruthy();
});
test('isEqualMagic', () => {
    const result = [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
    ];
    expect(magic_square_1.isMagic(result, 3)).toBeTruthy();
});
test('posibles1', () => {
    const result = [
        [1, 2, 3],
        [6, 5, 4],
        [2, 2, 2]
    ];
    const ar = magic_square_1.posibles(result, 3);
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
    expect(isContained(magic_square_1.posibles(result, 3), [res])).toBeTruthy();
});
test('posibles2', () => {
    const result = [
        [9, 2, 1],
        [6, 5, 4],
        [8, 3, 7]
    ];
    const res = [];
    expect(isContained(magic_square_1.posibles(result, 3), [res])).toBeTruthy();
});
