import { isMagicColumn, isMagicRow, magic_num } from "./auxiliars";
import {isPartialyMagic} from "./auxiliars";
import {isMagic} from "./auxiliars";
import {posibles} from "./auxiliars";
import {isRepited} from "./auxiliars";
import {isGreaterThanMagicNumb} from "./auxiliars";

interface ms_Aux{
    finded: boolean;
    setter: Function;
    readonly n: number;
    sum:number,
    nexts:number
}

function magic_square(n:number):number[][]{
    
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    let aux:ms_Aux={
        finded:false,
        setter:setter,
        n:n,
        sum:0,
        nexts:0
    };
    let p=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    magic_squareAux(p,0,-1,aux)
    console.log(aux.nexts);
    return s;
    
}

function magic_squareAux(p: number[][],i:number,j:number,aux:ms_Aux):void{
    //console.log(p);
    //console.log(p);
    aux.nexts++;
    if(j===aux.n-1){
        if(!isMagicRow(p,i,aux.n))return;
        if(i==aux.n-1){
            //if(!isMagicColumn(p,j,aux.n))return;
            if(isMagic(p,aux.n)){
                aux.setter(p);
                aux.finded=true;
                return;
            }else{
                return;
            }
        }
    }else{
        //if(isGreaterThanMagicNumb(p,i,j,aux.n))return;
    }
    if(j===aux.n-1){
        j=0;
        i++;
    }else{
        j++;
    }
    if(j===0){
        aux.sum=0;
    }
    let candidatos=posibles(p,aux.n,i,j);
    //console.log(candidatos)
    candidatos.forEach(m => {
        aux.sum+=m;
        if(!(aux.sum>magic_num(aux.n))){
            p[i][j]=m;
            magic_squareAux(p,i,j,aux);
            if(aux.finded)return;
        }
        aux.sum-=m;
        //p[i][j]=-1;
    });
    return;
}

export default magic_square;
