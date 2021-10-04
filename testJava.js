let name = `sasha`;
let age = 29;

function egg (eggSklad, eggNew){
    return eggSklad + eggNew
}
let eggFull = egg(12,15);

const eggFullToo = function(eggSklad,eggNew){
    return eggSklad+eggNew
}

const eggFullThree = (eggSklad,eggNew) => eggSklad+eggNew

console.log(name + ` ` + age + ` общее количество яиц: ` + eggFull + `,` + eggFullToo(20,21) + `,` + eggFullThree(13,16));

if((eggFullToo(40,20) != eggFullThree(30,31)) && (eggFullToo(2,22)  >= eggFullThree(2,10))){
    console.log(`true`)
}else{
    console.log(`false`)
}

const nakormlu = proshu => {
    let fullSklad = eggFullToo(30,0);
    if( fullSklad >= proshu){
        console.log(`true`)
        return fullSklad - proshu
    }else{
        return false
    }
}
console.log(nakormlu(40))