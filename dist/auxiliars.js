"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPartialyMagic = exports.posibles = exports.isRepited = exports.isMagic = exports.magic_num = exports.isMagicRow = void 0;
function isMagicRow(p, i, n) {
    let res = true;
    const magic_number = magic_num(n);
    for (let k = 0; k <= i; k++) {
        let tmp_sum = 0;
        for (let j = 0; j < n; j++) {
            tmp_sum += p[k][j];
        }
        res = res && tmp_sum === magic_number;
    }
    return res;
}
exports.isMagicRow = isMagicRow;
function magic_num(n) {
    return ((n * n * n) + n) / 2;
}
exports.magic_num = magic_num;
function isMagic(p, n) {
    const magic_number = magic_num(n);
    let diagonal1 = 0;
    let diagonal2 = 0;
    let res = true;
    for (let k = 0; k < n; k++) {
        diagonal1 += p[k][k];
        diagonal2 += p[k][n - k - 1];
    }
    res = res && diagonal1 === magic_number;
    res = res && diagonal2 === magic_number;
    //rows
    for (let i = 0; i < n; i++) {
        let tmp_sum = 0;
        for (let j = 0; j < n; j++) {
            tmp_sum += p[i][j];
        }
        res = res && tmp_sum === magic_number;
    }
    //colums
    for (let i = 0; i < n; i++) {
        let tmp_sum = 0;
        for (let j = 0; j < n; j++) {
            tmp_sum += p[j][i];
        }
        res = res && tmp_sum === magic_number;
    }
    return res;
}
exports.isMagic = isMagic;
function isRepited(p, m) {
    let res = false;
    p.forEach(t => {
        t.forEach(k => res = res || k === m);
    });
    return res;
}
exports.isRepited = isRepited;
function posibles(p, m, s, t) {
    let arr = [];
    for (let i = 1; i <= m * m; i++) {
        arr.push(i);
    }
    for (let i = 0; i <= s; i++) {
        for (let j = 0; (i < s) ? j <= p[0].length : j <= t; j++) {
            //console.log(p[i][j],arr)
            arr = arr.filter(t => t !== p[i][j]);
        }
    }
    return arr;
}
exports.posibles = posibles;
function isPartialyMagic(p, i, n) {
    let res = true;
    let axisX = 0;
    let axisY = 0;
    if (i == n - 1) {
        //console.log("entre");
        p[0].forEach(b => axisX += b);
    }
    //console.log(p,axisX,p[0]);
    for (let k = 0; k < n; k++) {
        axisY += p[k][0];
    }
    //console.log(axisY);
    for (let k = 0; k <= i; k++) {
        let tmpY = 0;
        for (let t = 0; t < n; t++) {
            tmpY += p[t][k];
        }
        //console.log(k,tmpY,axisY);
        res = res && tmpY === axisY;
    }
    if (i == n - 1) {
        for (let k = 1; k < n; k++) {
            let tmpX = 0;
            for (let t = 0; t < n; t++) {
                tmpX += p[k][t];
            }
            res = res && tmpX === axisX;
        }
    }
    return res;
}
exports.isPartialyMagic = isPartialyMagic;
