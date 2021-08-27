import { isMagicRow } from "./auxiliars";
import {isPartialyMagic} from "./auxiliars";
import {isMagic} from "./auxiliars";
import {posibles} from "./auxiliars";
import {isRepited} from "./auxiliars";
import { isContained,isMatrixEqual } from "./test_auxiliars";
import magic_square from "./magic_square"


test('equals matrixs',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(isMatrixEqual(s,p)).toBeTruthy();       
})
test('not equals matrixs',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(!isMatrixEqual(s,result)).toBeTruthy();       
})
test('isPartialMagic',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(isPartialyMagic(result,1,3)).toBeTruthy();       
})
test('isPartialMagic2',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(isPartialyMagic(result,2,3)).toBeTruthy();       
})
test('isPartialMagic3',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(isPartialyMagic(result,0,3)).toBeTruthy();       
})
test('isNotPartialMagic',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(!isPartialyMagic(p,2,3)).toBeTruthy();       
})
test('isMagic',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(isMagic(result,3)).toBeTruthy();       
})
test('isNotMagic',()=>{
    let s=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];
    function setter(p:number[][]):void{
        s=[...p];
    }
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    const p=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ];

    expect(!isMagic(p,3)).toBeTruthy();       
})

test('msquare with n: 3',()=>{
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ];
    
    let s=magic_square(3);
    console.log(s);
    expect(isMatrixEqual(s,result)).toBeTruthy();    
})

test('isRepited',()=>{
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ]; 
    expect(isRepited(result,5)).toBeTruthy(); 
})
test('isNotRepited',()=>{
    const result=[
        [2,7,6],
        [9,5,1],
        [4,3,8]
    ]; 
    expect(!isRepited(result,12)).toBeTruthy(); 
})

test('posibles1',()=>{
    const result=[
        [1,2,3],
        [6,5,4],
        [2,2,2]
    ]; 
    const ar=posibles(result,3,2,2);
    //console.log(ar);
    const res=[7,8,9];
    expect(isContained(ar,[res])).toBeTruthy(); 
})
test('posibles2',()=>{
    const result=[
        [-1,-1,-1],
        [-2,-1,-1],
        [-1,-1,-1]
    ]; 
    const res=[1,2,3,4,5,6,7,8,9];
    expect(isContained(posibles(result,3,2,2),[res])).toBeTruthy(); 
})
test('posibles3',()=>{
    const result=[
        [9,2,1],
        [6,5,4],
        [8,3,7]
    ]; 
    const res:number[]=[];
    expect(isContained(posibles(result,3,2,2),[res])).toBeTruthy(); 
})
test('posibles4',()=>{
    const result=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]; 
    const expected:number[]=[9];
    const res:number[]=posibles(result,3,2,1)
    //console.log(res);
    expect(isContained(res,[expected])).toBeTruthy(); 
})