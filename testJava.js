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
    for (let i = 0; i <= a.length; ++i) {
      if (a[i] == 0) {
        a[i] = 1;
      } else if (a[i] == 1) {
        a[i] = 0;
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

const zpChasti = (rabs, zamBoss, boss, days, error, hours) => {
  let rabsZp = rabs * (zarplata(days, error) + premia(3) + avans(days, hours));
  let zamBossZp =
    zamBoss * (zarplata(days, error) + premia(3) + avans(days, hours)) * 3;
  let bossZp =
    boss * (zarplata(days, error) + premia(3) + avans(days, hours)) * 5;
  return rabsZp + zamBossZp + bossZp;
};
//console.log(zpChasti(23, 1, 1, 10, 2, 24))

let stroka =
  "Всем привет я узнал что у меня есть огромная собака. Так что будет делать чик.";

const bomba = (stroka) => {
  if (stroka.length > 0) {
    if (stroka.includes(`бомба`) == true) {
      return stroka.slice(stroka.indexOf(`бомба`));
    } else {
      return `всё мирно`;
    }
  } else {
    return `нет текста`;
  }
};
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
let strokaTwo = `d ljwhg87 lskj928293 fw3xrg3`;

const s = (stroka) => {
  if (stroka.length > 0) {
    let mass = stroka.split(``);
    let poisk = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i <= mass.length; ++i) {
      for (let j = 0; j < poisk.length; ++j) {
        if (mass[i] == poisk[j]) {
          mass[i] = `sАsha`;
        }
      }
    }
    return mass.join(``);
  } else {
    return `ничео не делаем`;
  }
};
//console.log(s(strokaTwo))

let luboiMass = [1, `g`, 8, `h`, 1, `g`, 8, `h`, 91, `g`, 8, `h`, 7];

//luboiMass.foreach(element => {
// return element + 10;
//});

//console.log(luboiMass);

/* let newMassiw2 = [6, 4, 2, 3, 4, 5, 6, 7, 8];

let m = newMassiw2.map(el=>el=el*el)
//console.log(m)

let m2 = newMassiw2.map((el,i)=>{
  if(i == newMassiw2.length-1){
    return el
  }else{
    return el=el*newMassiw2[i+1];
  }
}) */
//console.log(m2)
/* 
let m3 = [];
newMassiw2.map((el,i)=>{
  if((i+1) % 2 == 0){
    el = el + newMassiw2[i-1];
    return m3.push(el);
  }
})

//console.log(m3)

let arrayStudents = [`sasha`, `serg`, `misha`, `dima`, `masha`, `vova`, `serg`, `dima`];

let bukvi = arrayStudents.map(el=>{
  return el= el.length
})
//console.log(bukvi)

let zamena = arrayStudents.map(el=>{
  if (el == `serg`){
      return el = `dima`
  }else{
    return el
  }
})
//console.log(zamena)

let igra = [5,6,4,3,5,7,9,2,5,2,0,1,3,5,3,2,6,7,8,3,4,5,5,3,3,4,5,6,2,3,3,7,7,8,2,5,6,4,3,5,6];

let znachenieBeznal = []
igra.map((el,i)=>{
  if(el != 0){
    return znachenieBeznal.push(el)
  }
})
let podschot = znachenieBeznal.map((el,i)=>{
  if(el + znachenieBeznal[i+1]==10){
    el = 0;
    znachenieBeznal[i+1] = 0;
 }
 return el
})

let reshotka = ``

for(let i=1; i<=4; ++i){
console.log(`# # # #`)
console.log(` # # # #`)
}


/* for(let i = 1; i<=100; i++){
  if(i%3 == 0 && i%5== 0){
    console.log( `FizzBuzz   ` +i);
  }else if(i%5 == 0){
    console.log(`Buzz   ` +i);
  } else if(i%3 == 0){
    console.log( `Fizz   ` + i)

  }
}

for() */

/* const min = (a,b) => a>b ? b : a


console.log(min(0, 10));
console.log(min(0, -10));


const isEven = a => a%2 == 0 ? true : false 


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

const js = (a,b)=>{
  if(a>b){
    return a;
  }else{
    return b;
  }
}
console.log(js(4,3))

const jsx = (a,b)=> a>b ? a : b

console.log(jsx(4,3))

const ter = igra.forEach(el=>el+`a`);

console.log(ter)


const pp = []
igra.map(el=>{
  if(el%2 == 0 && pp.length < 10){
    return pp.push(el);
  }
})
console.log(pp) */

const chek = (client, korzina) => {
  //создаём массив клиентов
  let person = [
    { name: `Dima`, age: 30, money: `68$` },
    { name: `Sasha`, age: 31, money: `8$` },
    { name: `Serg`, age: 25, money: `10800$` },
    { name: `Masha`, age: 17, money: `90$` },
  ];
  //создаём массив товаров(склад)
  let tovar = [
    { name: `coffee`, price: `4$`, ostatok: 17, error: true },
    { name: `beer`, price: `90$`, ostatok: 23, error: false },
    { name: `milk`, price: `2$`, ostatok: 13, error: true },
    { name: `bread`, price: `1$`, ostatok: 30, error: true },
  ];

  let textCheka = ``;
  //проверяем условие, если корзина не пуста и клиент присутствует
  if (korzina.length != 0 && client.length != 0) {
    //мы должны узнать, что в корзине(стоимость покупки)
    let obschaSumma = 0;
     
      

    person.forEach((el) => {
      if (el.name == client) {
        korzina.forEach(elVkorzine=>{
          tovar.forEach((elTovara, i)=>{
            if (elTovara.name == elVkorzine.name) {
              if (elTovara.error == false) {
                if (el.age >= 18) {
                  obschaSumma +=elVkorzine.coll*parseInt(elTovara.price.slice(0, elTovara.price.indexOf(`$`)))
                  if (
                    parseInt(el.money.slice(0, el.money.indexOf(`$`))) >=
                    obschaSumma
                  ) {
                    elTovara.ostatok-=elVkorzine.coll;
                    textCheka = `Уважаемый клиент:${client} вы успешно оплатили товар на сумму: ${obschaSumma}$ ваш баланс равен: ${
                      parseInt(el.money.slice(0, el.money.indexOf(`$`))) -
                      obschaSumma
                    }$`;
                  } else {
                    textCheka = `Уважаемый клиент:${client} вам не хватает суммы: ${
                      obschaSumma -
                      parseInt(el.money.slice(0, el.money.indexOf(`$`)))
                    }$`;
                  }
                } else {
                  textCheka = `Уважаемый клиент: ${client} Вам нет 18`;
                }
              } else{
                obschaSumma +=elVkorzine.coll*parseInt(elTovara.price.slice(0, elTovara.price.indexOf(`$`)))
                if (
                  parseInt(el.money.slice(0, el.money.indexOf(`$`))) >=
                  obschaSumma
                ) {
                  elTovara.ostatok-=elVkorzine.coll;
                  textCheka = `Уважаемый клиент:${client} вы успешно оплатили товар на сумму: ${obschaSumma}$ ваш баланс равен: ${
                    parseInt(el.money.slice(0, el.money.indexOf(`$`))) -
                    obschaSumma
                  }$`;
                } else {
                  textCheka = `Уважаемый клиент:${client} вам не хватает суммы: ${
                    obschaSumma -
                    parseInt(el.money.slice(0, el.money.indexOf(`$`)))
                  }$`;
                }
              }
            }
          })
        })
        
      }
    });
     

console.log(tovar)

    return textCheka;
  } else if (korzina.length == 0) {
    //если корзина пуста, то
    return `корзина пуста`;
  } else if (client.length == 0) {
    //если клиента нет, то
    return `клиенты отсутствуют`;
  }
};
console.log(
  chek(`Serg`, [
    { name: `milk`, coll: 6 },
    { name: `beer`, coll: 30 },
    { name: `bread`, coll: 3 },
  ])
);
