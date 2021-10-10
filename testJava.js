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

const chegoBolsheSel = (
  risDaysEat,
  grechkaDaysEat,
  mankaDaysEat,
  risPachekZaRaz,
  grechkaPachekZaRaz,
  mankaPachekZaRaz,
  gramms
) => {
  let risGramms = 0;
  let grechkaGramms = 0;
  let mankaGramms = 0;

  if (
    risDaysEat + grechkaDaysEat + mankaDaysEat > 0 &&
    risPachekZaRaz > 0 &&
    grechkaPachekZaRaz > 0 &&
    mankaPachekZaRaz > 0
  ) {
    for (
      let dayEat = 1;
      dayEat <= risDaysEat + grechkaDaysEat + mankaDaysEat;
      ++dayEat
    ) {
      if (risDaysEat >= dayEat) {
        if (dayEat % 2 == 0) {
          risGramms += risPachekZaRaz * 3 * gramms;
        } else {
          risGramms += risPachekZaRaz * 5 * gramms;
        }
      } else if (risDaysEat + grechkaDaysEat >= dayEat) {
        if (dayEat % 2 == 0) {
          grechkaGramms += grechkaPachekZaRaz * 3 * gramms;
        } else {
          grechkaGramms += grechkaPachekZaRaz * 5 * gramms;
        }
      } else if (mankaDaysEat + risDaysEat + grechkaDaysEat >= dayEat) {
        if (dayEat % 2 == 0) {
          mankaGramms += mankaPachekZaRaz * 3 * gramms;
        } else {
          mankaGramms += mankaPachekZaRaz * 5 * gramms;
        }
      }
    }
  } else {
    return `он не ел`;
  }

  if (risGramms >= grechkaGramms && risGramms >= mankaGramms) {
    return `больше всего риса: ${risGramms}
        `;
  } else if (grechkaGramms >= risGramms && grechkaGramms >= mankaGramms) {
    return `больше всего гречки: ${grechkaGramms}`;
  } else if (mankaGramms >= risGramms && mankaGramms >= grechkaGramms) {
    return `больше всего манки: ${mankaGramms}`;
  }
};
//console.log(chegoBolsheSel(3, 4, 2, 2, 2, 3, 500))

let massivchik = [2, 1, 2, 3, 5, 6, 6, 5];
let masivDenisov = [5, 6, 5, 7, 8, 5];

const summNumberArray = (array) => {
  let summ = 0;
  if (array.length > 0) {
    for (let i = 0; i <= array.length; ++i) {
      if (typeof array[i] === `number`) {
        summ += array[i];
      }
    }
    return `общая сумма массива: ${summ}`;
  } else {
    return `массив пуст`;
  }
};

//console.log(summNumberArray(massivchik));
//console.log(summNumberArray(masivDenisov));

const summaMassiva = (arrayOne, arrayTwo) => {
  if (arrayOne.length > 0 && arrayTwo.length > 0) {
    if (arrayOne.length > arrayTwo.length) {
      for (let j = arrayTwo.length + 1; j <= arrayOne.length; ++j) {
        arrayTwo[j] = 0;
      }
      for (let i = 0; i < arrayOne.length; ++i) {
        arrayOne[i] += arrayTwo[i];
        console.log(arrayOne[6] + `,` + arrayTwo[6]);
      }
      return arrayOne;
    } else {
      return `ntrcn`;
    }
  } else {
    return `не правильно`;
  }
};

//console.log(summaMassiva(massivchik, masivDenisov))

let text = "Привет всем меНя зоВут дима Дмитриев  и мне 34 Года.";
let textTwo = "новый текст";

const upgStroka = (stroka) => {
  if (stroka.length > 0) {
    let newMassiv = stroka.split(" ");
    for (let i = 0; i < newMassiv.length; ++i) {
      if (newMassiv[i] != "буква большая") {
        newMassiv[i] = newMassiv[i].toUpperCase();
      } else {
        newMassiv[i] += "саня";
      }
    }
    return newMassiv.join("");
  } else {
    return "строка пуста";
  }
};

//console.log(upgStroka(textTwo))

//(a+b) * PI / b * 100%

const avans = (colDays, hours) => {
  const PI = 3.14;
  return (((colDays + hours) * PI) / hours) * 100;
};

//console.log(avans(2,8))

//b + b/2 + b/3 + b/5 - a*b

//a = b*34

const premia = (ideal) => {
  let a = ideal * 34;
  return ideal + ideal / 2 + ideal / 3 + ideal / 5 - a * ideal;
};
//console.log(uravnenie(5))

const zarplata = (days, error) => {
  let errorPrice = 30;
  let workPrice = 20;
  let timeInDey = 8;
  let nadbavkaDay = 10;
  return (workPrice * timeInDey + nadbavkaDay) * days - error * errorPrice;
};
//console.log(zarplata(24, 4));

//[1, 0, 1, 1, 1, 1, 0]

const sasha = (a) => {
  if (a.length > 0) {
    for (let i = 0; i <= a.length; ++i){
        if(a[i]==0){
            a[i]=1;
        }else if(a[i]==1){
            a[i]=0;
        }
    }
    return a;
  } else {
    return `не правда`;
  }
};

//console.log(sasha([1, 0, 1, 1, 1, 1, 0]));

/* const название переменной в которой храниться функия = (то, что данная функция принимает) =>{
  обработка данных
  return возвращаем выполнения данной функции
} 
console.log(название(передаём, то что надо обработать)); */


/* function имя функции (то, что данная функция принимает) {
'это функциия называется function declaration. Может вызываться до объявления функции'
обработка данных
return возвращаем результат выполнения данной функции
}
console.log(имя функции(передаём, то что надо обработать)) */


/* const название переменной в которой храниться функия = function (то, что данная функция принимает){
  `это функциия называется function expression. Не может вызываться до объявления функции`
  обработка данных
  return возвращаем выполнения данной функции
}
console.log(название переменной в которой храниться функия(передаём, то что надо обработать)) */


/* iife данная функция сама себя вызывает
 (function (принимаем данные){
  обработка данных
  return возвращаем результат выполнения данной функции
 }(передаём, то что надо обработать) */

 const zpChasti = (rabs, zamBoss, boss, days, error, hours) =>{
   let rabsZp = rabs*(zarplata(days, error)+premia(3)+avans(days, hours));
   let zamBossZp = zamBoss*(zarplata(days, error)+premia(3)+avans(days, hours))*3;
   let bossZp = boss*(zarplata(days, error)+premia(3)+avans(days, hours))*5;
  return rabsZp + zamBossZp + bossZp
 }
//console.log(zpChasti(23, 1, 1, 10, 2, 24))

let stroka = 'Всем привет я узнал что у меня есть огромная собака. Так что будет делать чик.'

const bomba = stroka =>{
  if(stroka.length>0){
    if(stroka.includes(`бомба`) == true){
      return stroka.slice(stroka.indexOf(`бомба`))
    }else{
      return `всё мирно`
    }
  }else{
   return `нет текста`
  }
}
//console.log(bomba(stroka))

/* const zamena = stroka =>{
  if(stroka.length>0){
    let mass = stroka.split(``);
    for(let i=0; i<=mass.length; ++i){
      if(mass[i] == `о`){
         mass[i] = `А`
      }
    }
    return mass.join(``)
  }else{
    return `ничео не делаем`
  }
}
console.log(zamena(stroka)) */
let strokaTwo = `d ljwhg87 lskj928293 fw3xrg3`


const s = stroka =>{
  if(stroka.length>0){
    let mass = stroka.split(``);
    let poisk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i=0; i<=mass.length; ++i){
      for(let j=0; j<poisk.length; ++j){
        if(mass[i] == poisk[j]){
           mass[i] = `sАsha`
       }
      }
    }
    return mass.join(``);
  }else{
    return `ничео не делаем`
  }
}
console.log(s(strokaTwo))
