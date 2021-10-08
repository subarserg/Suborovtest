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
let risPachekZaRaz = 2;
let risDaysEat = 3;
let grechkaPachekZaRaz = 2;
let grechkaDaysEat = 4;
let mankaPachekZaRaz = 3;
let mankaDaysEat = 2;
let gramms = 500;
let risGramms = 0;
let grechkaGramms = 0;
let mankaGramms = 0;

if( risDaysEat + grechkaDaysEat + mankaDaysEat > 0 && risPachekZaRaz > 0 && grechkaPachekZaRaz > 0 && mankaPachekZaRaz > 0 ){
    for(let dayEat = 1; dayEat <= risDaysEat + grechkaDaysEat + mankaDaysEat ; ++dayEat ){
        if(risDaysEat >= dayEat){
            if (dayEat%2 == 0){
                risGramms += risPachekZaRaz * 3 * gramms;
            } else {
                risGramms += risPachekZaRaz * 5 * gramms;
            }
        }else if(risDaysEat + grechkaDaysEat >= dayEat ){
            if (dayEat%2 == 0){
                grechkaGramms += grechkaPachekZaRaz * 3 * gramms;
            } else {
                grechkaGramms += grechkaPachekZaRaz * 5 * gramms;
            }
        }else if(mankaDaysEat + risDaysEat + grechkaDaysEat >= dayEat){
            if (dayEat%2 == 0){
                mankaGramms += mankaPachekZaRaz * 3 * gramms;
            } else {
                mankaGramms += mankaPachekZaRaz * 5 * gramms;
            }
        }
    }
}else{
    console.log(`он не ел`);
}

if( risGramms >= grechkaGramms && risGramms >= mankaGramms){
    console.log(`больше всего риса: ${risGramms}`)
}else if (grechkaGramms >= risGramms && grechkaGramms >= mankaGramms){
    console.log(`больше всего гречки: ${grechkaGramms}`)
}else if (mankaGramms >= risGramms && mankaGramms >= grechkaGramms){
    console.log(`больше всего манки: ${mankaGramms}`)
}




const chegoBolsheSel = (risDaysEat, grechkaDaysEat, mankaDaysEat, risPachekZaRaz, grechkaPachekZaRaz, mankaPachekZaRaz, gramms) => {
    let risGramms = 0;
    let grechkaGramms = 0;
    let mankaGramms = 0;

    if( risDaysEat + grechkaDaysEat + mankaDaysEat > 0 && risPachekZaRaz > 0 && grechkaPachekZaRaz > 0 && mankaPachekZaRaz > 0 ){
        for(let dayEat = 1; dayEat <= risDaysEat + grechkaDaysEat + mankaDaysEat ; ++dayEat ){
            if(risDaysEat >= dayEat){
                if (dayEat%2 == 0){
                    risGramms += risPachekZaRaz * 3 * gramms;
                } else {
                    risGramms += risPachekZaRaz * 5 * gramms;
                }
            }else if(risDaysEat + grechkaDaysEat >= dayEat ){
                if (dayEat%2 == 0){
                    grechkaGramms += grechkaPachekZaRaz * 3 * gramms;
                } else {
                    grechkaGramms += grechkaPachekZaRaz * 5 * gramms;
                }
            }else if(mankaDaysEat + risDaysEat + grechkaDaysEat >= dayEat){
                if (dayEat%2 == 0){
                    mankaGramms += mankaPachekZaRaz * 3 * gramms;
                } else {
                    mankaGramms += mankaPachekZaRaz * 5 * gramms;
                }
            }
        }
    }else{
        return `он не ел`;
    }
    
    if( risGramms >= grechkaGramms && risGramms >= mankaGramms){
        return `больше всего риса: ${risGramms}
        `
        
    }else if (grechkaGramms >= risGramms && grechkaGramms >= mankaGramms){
        return `больше всего гречки: ${grechkaGramms}`
    }else if (mankaGramms >= risGramms && mankaGramms >= grechkaGramms){
        return `больше всего манки: ${mankaGramms}`
    }
}
//console.log(chegoBolsheSel(3, 4, 2, 2, 2, 3, 500))

let massivchik = [2, 1, 2, 3, 5, 6 , 6, 5 ];
let masivDenisov = [5, 6, 5, 7 , 8, 5 ];

const summNumberArray = array => {
    let summ = 0;
    if (array.length > 0){
        for( let i=0; i<=array.length; ++i){
            if(typeof(array[i]) === `number`){
                summ += array[i];
            }
        }
        return `общая сумма массива: ${summ}`

    }else{
        return `массив пуст`
    } 
}

//console.log(summNumberArray(massivchik));
//console.log(summNumberArray(masivDenisov));


const summaMassiva = (arrayOne, arrayTwo) =>{
    if(arrayOne.length > 0 && arrayTwo.length > 0 ){
        if(arrayOne.length > arrayTwo.length){
            for (let j=arrayTwo.length + 1; j<=arrayOne.length; ++j){
                arrayTwo[j] = 0;
            }
            for(let i=0; i < arrayOne.length; ++i){
                arrayOne[i]+=arrayTwo[i]
                console.log(arrayOne[6]+`,`+arrayTwo[6])
            }
            return arrayOne
        }else{
            return `ntrcn`
        }
    }else{
        return `не правильно`
    }
}

console.log(summaMassiva(massivchik, masivDenisov))

let text = 'Привет всем меНя зоВут дима Дмитриев  и мне 34 Года.'
let textTwo = 'новый текст'

const upgStroka = stroka => {
    if(stroka.length > 0){
        let newMassiv = stroka.split(' ');
        for(let i = 0; i < newMassiv.length ; ++i){
            if (newMassiv[i] != 'буква большая'){
                newMassiv[i] = newMassiv[i].toUpperCase();
            }else{
                newMassiv[i]+='саня' 
            }
        }
        return newMassiv.join('');
    }else{
        return 'строка пуста'
    }
    
}

console.log(upgStroka(textTwo))