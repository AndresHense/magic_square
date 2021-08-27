export function isContained(a: number[],b: number[][]):boolean{
    let res:boolean=false;
    for(let j:number=0;j<b.length;j++){
        res = res ||( a.length===b[j].length &&
        a.every((v:number,i:number)=> (v==b[j][i])));
    }
    return res;
}
//asumo tienen misma longitud
export function isMatrixEqual(a:number[][],b:number[][]):boolean{
    let res:boolean=false;
    for(let i:number=0;i<a.length;i++){
        res=res||isContained(a[i],[b[i]]);
    }
    return res;
}