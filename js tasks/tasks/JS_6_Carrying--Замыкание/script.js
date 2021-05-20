////  Отличие массивов и объектов
////  Синтаксический сахар : spread, rest-operator (ES6)
////  Ленивая инициализация
////  Метод сокращения
////  split / reverse / join
////  Каррирование (Carrying) / Замыкание (Closure)

////                     Отличие массивов и объектов

// const array = [
//     {id: 1, title: 'Igor'},
//     {id: 2, title: 'Ivan'}
// ];
//
// const obj = {
//     1: {id:1, title: 'Igor'},
//     2: {id:2, title: 'Ivan'}
// };
//
// console.log( array.find( el => el.id === 2) );
// console.log( obj[2] );

////                          Синтаксический сахар

////                                     spread
// const array = [4, 7, 8, 9];
// const array1 = [...array, 99, 77];
// console.log( array1 );

// ////                               spread obj
// const obj = {
//     mark: 'Toyota',
//     year: 2005
// };
// const obj2 = {...obj, color: 'red'};
// console.log(obj2);

////                                   REST operator (собирает все несиспользуемые аргументы функции)
////                                        arguments (хранит все аргументы ф-ии)

// const array = [4, 5, 8, 48, 65, 7];
// const [firstItem, secondItem, ...args] = array;
// console.log(firstItem);
// console.log(secondItem);
// console.log(args);

// function foo(item, ...args) {
//     console.log(arguments);
//     return item * 2
// }
// console.log( foo(4,2,6,8,9) );

////                                                   Ленивая инициализация (дефолтное значение)

// const foo = ( name = 'User' ) => {
//     return name
// };
// console.log( foo() );
// // console.log( foo( 'Igor' ) );

////                                                            Метод сокращения

// const title = 'Igor';
// let obj = {
//     title,
//     year: 25
// };
// console.log(obj);
//
// const obj2 = {
//     func: function () {
//         return 'Hi'
//     },
//     func2() {                          //// сокращенная запись
//         return 'Im a new syntax'
//     }
// };
// console.log(obj2.func());
// console.log(obj2.func2());

////                                                         split / reverse / join
// const str = 'A B C D E F';
// const result = str.split(' ').reverse().join('-');

// console.log(result);

////                                                                    Carrying

// function sum(a, b, c) {                   /// простой вид
//     return a + b + c;
// }
// console.log( sum(4,2,5));
// console.log( sum(4,2,6));

////                                    Example 1

// function sum(a) {                                // carrying
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// const sum = a => b => c => a + b +c;                              //  новый JS
//
// console.log( sum(4)(2)(5));
// console.log( sum(4)(2)(6));


////                                   Example 2

// const square = w => h => {
//     return w * h;
// };

// const resultSquare = square(20);

// console.log( resultSquare(5) );
// console.log( resultSquare(7) );
// console.log( resultSquare(2) );
// console.log( resultSquare(9) );

////                                    Example 3

// const baseRequest = host => baseUrl => url => {
//     return `${host}${baseUrl}${url}`
// };
//
// const baseSendRequest = baseRequest('http://yandex.ru');
// const baseUrlRequest = baseSendRequest('search/');
//
// console.log( baseUrlRequest( 'vk') );
// console.log( baseUrlRequest( 'facebook') );
// console.log( baseUrlRequest( 'book') );


////                                                                Closure / Замыкание

// function foo(a) {
// //     let count = a;
// //     return () => {
// //         count = count +1;
// //         console.log(count)
// //     }
// // }
// // let zzz = foo(1);
// // console.log( zzz() );
// // console.log( zzz() );
// // console.log( zzz() );
// // console.log( zzz() );

// function foo() {
//     let count = 0;
//     return {
//         positionLeft (position){
//             return count = count + 1;
//         },
//         positionRight (position){
//             return count = count - 1;
//         },
//         clear (){
//             count = 0
//         }
//     }
// }
// const tetris = foo();
// console.log( tetris.positionLeft() );
// console.log( tetris.positionLeft() );
// console.log( tetris.positionLeft() );
// console.log( tetris.positionRight() );
// console.log( tetris.clear() );
// console.log( tetris.positionRight() );



