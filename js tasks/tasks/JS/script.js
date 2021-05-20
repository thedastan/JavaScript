// let a = prompt('Введите ');
// if (a === 'test'){
//     console.log('Верно')
// } else {
//     console.log('Неверно')
// }

// let day = 30;
// let day = prompt('Введите число ');
// if (day >= 1 && day < 11){
//     console.log('I четверть')
// } else if (day > 10 && day < 21){
//     console.log('II четверть')
// } else if (day > 20 && day <= 31){
//     console.log('III четверть')
// }  else {
//     console.log('Вне диапозона')
// }

// let num = 2;
// switch (num) {
//     case 1: console.log('Зима');
//         break;
//     case 2: console.log('Весна');
//         break;
//     case 3: console.log('Лето');
//         break;
//     case 4: console.log('Осень');
//         break;
//     default: console.log('Такого числа нет');
// }

// let a;
// a=10;
// let b=15;
// var c=15, d=10;
// d=30;
// const e=20;

// let strl1='Hello ';
// let strl2='Ivan';

// console.log(a,b,c,d,e);
// console.log(strl1 + strl2);

// let name='Baha';
// let age=25;
// console.log('Я ' + name + ' мне ' + age + ' лет');
// console.log(`Я ${name} мне ${age} лет`);
// let j = 5;
// j++;
// j--;
// let i= age + j++;
// let k= age + ++j;

// console.log(j);
// console.log(i);
// console.log(k);

// let x=5;
// if (x>4){
//     console.log('Больше')
// } else if (x === 4){
//     console.log('Равен')
// } else {
//     console.log('Меньше')
// }

// let time=30;
// if (time >= 0 && time < 16){
//     console.log('I четверть')
// } else if (time>15 && time <31){
//     console.log('II четверть')
// } else if (time>30 && time<46){
//     console.log('III четверть')
// } else if (time>45 && time<60){
//     console.log('IV четверть')
// } else {
//     console.log('Вне диапозона')
// }

// let a=10%3;
// console.log(a);

// let b = confirm('Test confirm');
// let c = prompt('Введите ваше имя');
// console.log(b);
// console.log(c);

// let year = prompt('Введите год');
// if (year%4 !==0 || year%100 ===0 && year%400 !==0){
//     confirm('Невисокосный год')
// } else {
//     confirm('Високосный год')
// }

// let year = 20;
// switch (year) {
//     case 5:console.log('Ура это 5');
//         break;
//     case 6:console.log('Ура это 6');
//         break;
//     case 40:console.log('Ура это 60');
//         break;
//     default:console.log('Такого числа нет');
// }


// ЧТО НОВОГО JAVASCRIPT 2021
// 1. Strings
// 2. Promises
// 3. Private Methods
// 4. Logical Assigment
// 5. Numbers
// 6. WeakRef & Finalizators


// const string =
//     "JavaScript is the best language in the world. Let is learn JavaScript together."
//
//
// console.log(string.replace('JavaScript, Java'))
// console.log(string.replaceAll('JavaScript', 'Python'))


function createPromise(value, delay, error) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           error ? reject(error) : resolve(value)
        }, delay)
    })
}

const p1 = createPromise(1, 250)
const p2 = createPromise(2, 700)
const p3 = createPromise(3, 350, 'Some custom error')

async function start() {
    try {
        const res = await Promise.any([p3])
        res
    } catch (e) {
        console.log(e)
    }

}

start()