export function isPartialyMagic(p:number[][],i:number,n:number):boolean{
    let res:boolean=true;
    let axisX:number=0;
    let axisY:number=0;
    if(i==n-1){
        //console.log("entre");
        p[0].forEach(b=>axisX+=b);
    }
    //console.log(p,axisX,p[0]);
    
    for(let k:number=0;k<n;k++){
        axisY+=p[k][0];
    }
    //console.log(axisY);
    
    for(let k:number=0;k<=i;k++){
        let tmpY=0;
        for(let t:number=0;t<n;t++){
            tmpY+=p[t][k];
        }
        //console.log(k,tmpY,axisY);
        res=res && tmpY===axisY;
    }
    if(i==n-1){
        for(let k:number=1;k<n;k++){
            let tmpX=0;
            for(let t:number=0;t<n;t++){
                tmpX+=p[k][t];
            }
            res=res && tmpX===axisX;
        } 
    }
    return res;
}

export function isMagic(p:number[][],n:number):boolean{
    let diagonal1=0;
    let diagonal2=0;
    for(let k=0;k<n;k++){
        diagonal1+=p[k][k];
        diagonal2+=p[k][n-k-1];
    }
    return diagonal1===diagonal2 && isPartialyMagic(p,n-1,n);
}

export function isRepited(p:number[][],m:number):boolean{
    let res=false;
    p.forEach(t=>{
        t.forEach(k=>res=res||k===m)
    })
    return res;
}
export function posibles(p:number[][],m:number,s:number,t:number):number[]{
    let arr:number[]=[];
    for(let i=1;i<=m*m;i++){
        arr.push(i)
    }
    for(let i=0;i<=s;i++){
        for(let j=0;j<=t;j++){
            //console.log(p[i][j],arr)
            arr=arr.filter(t=>t!==p[i][j]);
        }
    }
    return arr;

}
function magic_square(p: number[][],i:number,j:number,n:number,finded:boolean,setter:Function):void{
    //console.log(p);
    console.log(p);
    if(j===n-1){
        //if(!isPartialyMagic(p,i,n))return;
        if(i==n-1){
            if(isMagic(p,n)){
                setter(p);
                finded=true;
                return;
            }else{return;}
        }
    }
    if(j===n-1){
        j=0;
        i++;
    }else{
        j++;
    }

    let candidatos=posibles(p,n,i,j);
    //console.log(candidatos)
    candidatos.forEach(m => {
        p[i][j]=m;
        magic_square(p,i,j,n,finded,setter);
        if(finded)return;
        p[i][j]=-1;
    });
    return;
}

export default magic_square;
