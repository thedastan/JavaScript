// let str = 'Hello nigga!';
// let str2 = 'Hello Kitty or Mitty!';
// let indexResult = str2.indexOf('e');       // indexOf
// console.log('>>>>>', indexResult);
// console.log('>>', str2.lastIndexOf('o'));        // lastIndexOf
// const reverseStr = (string, string2, ...rest) => {
//     console.log(rest);
//     return string.split('').reverse().join('') + string2
// };
// let result = reverseStr(str, str2, 4,5,3,2,1);
// console.log(result);

// console.log(str[1]);
// for(let i = 0; i < str.length; i++){
//     console.log(str[(str.length-1)-i]);
// }

//                  Методы
// let example = str.split('');
//                 1 способ
// example.reverse();
// example = example.join('');
// console.log(example);
//                 2 способ
// console.log(str.split('').reverse().join(''));

//              Аргументы и объекты
// function sum(a,b) {
//     console.log(arguments);
//     return a+b;
// }
// let example = sum(4,5);
// console.log(example);

// let newStr = 'Hhhello Kitty';
// const dublicateStr = (str)=>{
//     let result='';
//     str = str.toLowerCase();
//     for(let i=0; i<str.length; i++){
//         if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
//             result = result + '('
//         } else {
//             result = result + ')'
//         }
//     }
//     return result;
// };
// console.log(dublicateStr(newStr));

// let user = {
//     name : "Ivan",
//     "my age" : 37,
//     height : ['long', 'tall', 'short', 'double'],
//     weight : "bold"
// };
// user.name = 'Zalina';
// user["surname"] = 'Babaeva';
// // console.log(user);
// // console.log(user.height[3]);
//
// let keys = Object.keys(user);
// let values = Object.values(user);
// let entries = Object.entries(user);
// console.log(keys);
// console.log(values);
// console.log(entries);

// console.log(typeof user);
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["my age"]);

// // Фибонначи
// let x = 6;
// const check = n => {
//     let a = 0, b = 1;
//     for(let i = 0; i < n; i++){
//         let example = b;
//         b = a + b;
//         a = example;
//     }
//     return a;
// };
// console.log(check(x));
//
// // Палиндром
// let newSrt = 'Anna';
// const control = (str) =>{
//     str = str.toLowerCase();
//     for(let i=0; i < str.length; i++){
//         if(str[i] === str[i].split('').reverse().join('')){
//             return true
//         }
//         return false
//     }
// };
// console.log(control(newSrt));


// 1
const Sum = (a, b) =>{
    return(a+b);
};
Sum(1,5);

// 2
const person = (name,surname) =>{
return(`My Name Is: ${name} ${surname}`);
};
person('Anakin','SkyWalker');

// 3
const three = (val)=>{
  return(typeof val)
};

// 4
function four(val) {
if(val === 0) return 'Zero';
    return val < 0 ? 'Negative' : 'Positive'
}

// 5
const five = (n) => {
    return n.id
};

// 6
const test6 = (obj)=>{
        if(obj.name.length % 2){
            return 0
        }
        return 1
};

// 7
const z = (c,d)=>{
  if(c > d){
      return 1
  }
  if(c < d){
      return -1
  }
  return 0

};

// 8 right
function test(flag1, flag2, title) {
if(flag1 && flag2){
    return{name:title}
}
return {}
}
