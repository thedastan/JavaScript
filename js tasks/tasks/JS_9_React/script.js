// prototype
// Создание метода
// fill / pop
// метод  sort / localeCompare
// react
// async / await
// компоненты
// props / state


// let obj = {
//     wheels: 4,
//     doors: 4
// };
// const yellowCar = {
//     color: 'yellow',
//     __proto__: obj
// };
// console.log( obj );
// console.log( yellowCar );
// console.log( yellowCar.doors );

//                             Создание метода

// String.prototype.foo = function () {
//     return this
// };
// console.log( 'Hello world'.foo() );
// console.log( 'Hello world'.split('') );

// String.prototype.foo = function (symb) {
//     return this.split(symb)
// };
// console.log( 'Hello world'.foo(' ') );

// Array.prototype.average = function () {
//     return this.reduce( (acc, rec) => acc + rec ) / this.length
// };
// console.log( [1, 2, 3].average() );
// console.log( [4, 8, 9, 15].average() );
// console.log( [16, 48, 75, 35].average() );

// //                  Дз
// ('AbRA CADAbrA').capitalize();
// // Abra Cadabra

//                    fill / pop

// let array = new Array(10).fill(0).map( (el, idx) => idx + 1);
//
// let lastElement = array.pop();
//
// console.log( array );

//             метод  sort / localeCompare
// localeCompare - берет локализацию языка на компе и согласно этой локализации возвращает -1, 0, 1

// let array2 = ['wow', 'apple', 'bird', 'snake'];
//
// console.log( array2.sort() );
// console.log( array2.sort( (a, b) => a.localeCompare(b) ) ); // по алфавиту
// console.log( array2.sort( (a, b) => -1 * a.localeCompare(b) ) ); // в обратном
// console.log( 'b'.localeCompare('a') );
// console.log( 'a'.localeCompare('b') );
// console.log( 'b'.localeCompare('b') );

// let nmb = [34, 31, 7, 56, 4];
// console.log( nmb.sort( (a, b) => a - b ) ); // возрастание
// console.log( nmb.sort( (a, b) => b - a ) ); // убывание

// react - изменять содержимое страницы, не обновляя ее.
// создано разработчиками facebook
// в реакте своя объектная модель, к-ая яв-ся копией браузерной объектной моделью, но в упрощённом виде и горазде быстрее
// сравниваются две DOM модели реактной и браузерной, заменяются те данные, к-ые не совпадают, т.е. точечно подменяются данные
// суть реакта : разбивать страницу на отдельные компоненты, к-ые независимы друг от друга
// в реакте каждый компонент создаётся либо через функцию(лучше), либо через классы


// react - библиотека / можно выдергивать отдельные компоненты (пользоваться конкретными компонентами), не тянув всю библиотеку целиком

// angular - framework / нужно тянуть весь angular целиком (строгие правила)


// JSON.stringify() - показывает содержимое объекта

// async / await - заменяет then


// Компонент (создается при помощи ф-ии и с большой буквой)
// Любой компонент может содержать множество других компонентов
// в реакте каждый компонент может вернуть только одну вершину(один элемент)
// ReactDOM.render - метод позволяет отрендерить компонент на страницу

// props - объект, к-ый хранит все данные, к-ые пришли в этот компонент из вне

// &nbsp - это пробел

//state - нужен для хранения данных, эти данные в ходе жизненного цикла компонента могут обновляться
//state - это состояние, заданное внутри компонента
















