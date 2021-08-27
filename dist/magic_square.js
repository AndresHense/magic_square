"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auxiliars_1 = require("./auxiliars");
const auxiliars_2 = require("./auxiliars");
const auxiliars_3 = require("./auxiliars");
function magic_square(n) {
    let s = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    function setter(p) {
        s = [...p];
    }
    let aux = {
        finded: false,
        setter: setter,
        n: n
    };
    let p = [
        [-1, -1, -1],
        [-2, -1, -1],
        [-1, -1, -1]
    ];
    magic_squareAux(p, 0, -1, aux);
    return s;
}
function magic_squareAux(p, i, j, aux) {
    //console.log(p);
    //console.log(p);
    if (j === aux.n - 1) {
        if (!auxiliars_1.isMagicRow(p, i, aux.n))
            return;
        if (i == aux.n - 1) {
            if (auxiliars_2.isMagic(p, aux.n)) {
                aux.setter(p);
                aux.finded = true;
                return;
            }
            else {
                return;
            }
        }
    }
    if (j === aux.n - 1) {
        j = 0;
        i++;
    }
    else {
        j++;
    }
    let candidatos = auxiliars_3.posibles(p, aux.n, i, j);
    //console.log(candidatos)
    candidatos.forEach(m => {
        p[i][j] = m;
        magic_squareAux(p, i, j, aux);
        if (aux.finded)
            return;
        //p[i][j]=-1;
    });
    return;
}
exports.default = magic_square;
