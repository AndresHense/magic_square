import { magic_num, posibles } from "./auxiliars";


export interface ml_Aux{
    finded: boolean;
    setter: Function;
    readonly n: number;
    nexts:number;
    sum:number;
}

export function magic_list(n:number):number[]{
    let s:number[]=[];
    let p:number[]=[];
    for(let i=0;i<n;i++){
        s[i]=0;
        p[i]=0;
    }
    
    let nexts:number=0;
    const setter=(p:number[])=>s=[...p];
    //for(let i=1;i<=n*n;i++){
    //    nexts.push(i);
    //}
    let aux:ml_Aux={
        finded:false,
        setter:setter,
        n:n,
        nexts,
        sum:0
    };

    magic_listAux(p,-1,aux);
    //console.log(aux.nexts);
    return s;
}

export function magic_listAux(p:number[],i:number,aux:ml_Aux){
    //console.log(p)
    aux.nexts++;
    if(i===aux.n-1){
        if(p.reduce((a,b)=>a+b)===magic_num(aux.n)){
            //console.log("entre");
            aux.finded=true;
            aux.setter(p);
            return;
        }else{return}
    }
    i++;

    const succesors=posibles([p],aux.n,0,i)
    //console.log(succesors);
    succesors.forEach(k=>{
        //if(!p.splice(i+1,aux.n-i+1).includes(k)){
            aux.sum+=k;
            if(!(aux.sum>magic_num(aux.n))){
                p[i]=k;
                magic_listAux(p,i,aux)
                if(aux.finded)return;
            }
            aux.sum-=k;
        //}
    })
    
}