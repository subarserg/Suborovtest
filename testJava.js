/*let name = `sasha`;
let age = 29;

function egg (eggSklad, eggNew){
    return eggSklad + eggNew
}
let eggFull = egg(12,15);

const eggFullToo = function(eggSklad,eggNew){
    return eggSklad+eggNew
}

const eggFullThree = (eggSklad,eggNew) => eggSklad+eggNew

//console.log(name + ` ` + age + ` общее количество яиц: ` + eggFull + `,` + eggFullToo(20,21) + `,` + eggFullThree(13,16));

if((eggFullToo(40,20) != eggFullThree(30,31)) && (eggFullToo(2,22)  >= eggFullThree(2,10))){
   // console.log(`true`)
}else{
    //console.log(`false`)
}

const nakormlu = proshu => {
    let fullSklad = eggFullToo(30,0);
    if( fullSklad >= proshu){
        //console.log(`true`)
        return fullSklad - proshu
    }else{
        return false
    }
}
//console.log(nakormlu(40))

//string
//number
//boolean
//null
//undefined
//object
//console.log({name: `Sasha`})
//symbol

//==
//===
//>=
//!=
//!название переменной
//|| 1 || 2
//&&

function proizvedenie(a,b){
    return a*b
}
let rez = proizvedenie(3,5)
console.log(rez)

const rez2 = function(a,b){
    return a*b
} 
console.log(rez2(3,5))

const rez3 = (a,b) => a*b

console.log((function(a,b){
    return a*b
} )(3,5))

let c = 4;
let d = 4;
let a = `z4`;
let b = `z4`;
if(a==b && c==d){
    console.log(`true`)
}else{
console.log(`false`)
}

for(let i=2; i<=14; i++){
    console.log(`sergey`+i);
}*/

let morkovNewEveryDay = 10;
let morkovCell = 15;

for(let morkovSklad = 20; morkovSklad >= 0; morkovSklad - 15){
    console.log(`end`+morkovSklad)
}