"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posibles = exports.isRepited = exports.isMagic = exports.isPartialyMagic = void 0;
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
function isMagic(p, n) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let k = 0; k < n; k++) {
        diagonal1 += p[k][k];
        diagonal2 += p[k][n - k - 1];
    }
    return diagonal1 === diagonal2 && isPartialyMagic(p, n - 1, n);
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
function posibles(p, m) {
    let arr = [];
    for (let i = 1; i <= m * m; i++) {
        arr.push(i);
    }
    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < p[i].length; j++) {
            //console.log(p[i][j],arr)
            arr = arr.filter(t => t !== p[i][j]);
        }
    }
    return arr;
}
exports.posibles = posibles;
function magic_square(p, i, j, n, finded, setter) {
    //console.log(p);
    console.log(p);
    if (j === n - 1) {
        //if(!isPartialyMagic(p,i,n))return;
        if (i == n - 1) {
            if (isMagic(p, n)) {
                setter(p);
                finded = true;
                return;
            }
            else {
                return;
            }
        }
    }
    if (j === n - 1) {
        j = 0;
        i++;
    }
    else {
        j++;
    }
    /*
    for(let m=0;m<n*n;m++){
        if(!isRepited(p,m)){
            p[i][j]=m;
            magic_square(p,i,j,n,finded,setter);
            if(finded)return;
        }
    }*/
    let candidatos = posibles(p, n);
    console.log(candidatos);
    candidatos.forEach(m => {
        p[i][j] = m;
        magic_square(p, i, j, n, finded, setter);
        if (finded)
            return;
        p[i][j] = -1;
    });
    return;
}
/*
function subset_sum(C,p,i,k,exists,setter){
    if(k<0)return
    if(k==0){
        //console.log('hey');
        //sol=[...p];
        setter(p);
        exists=true;
        return;
    }
    if(i==-1){
        return;
    }else{
        p[i]=1;
        //console.log(p,"i: ",i,"k:",k,"C[i]",C[i]);
        subset_sum(C,p,i-1,k-C[i],exists,setter);
        if(exists)return;
        p[i]=0;
        //console.log(p,"i: ",i,"k:",k,"C[i]",C[i]);
        subset_sum(C,p,i-1,k,exists,setter);
        if(exists)return;
    }
    return;
}
*/
exports.default = magic_square;
