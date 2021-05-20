////             Constructor / Class

// let obj1 = {
//     name: 'Audi',
//     model: 'A6'
// };
// let obj2 = {
//     name: 'Audi',
//     model: 'Q6'
// };
// let obj3 = {
//     name: 'Audi',
//     model: 'TT'
// };
//
// ////                     Функция - Constructor
// //    позволяет создать шаблон, создавать множество однотипных объектов, создавать собственные методы
////     помогает строить объекты
// //    с большой буквой
//
// function CarAudi( carModel) {
//     this.name = 'Audi';
//     this.model = carModel;
//     this.viewInfo = function () {
//         console.log( `Name: Audi, Model: ${this.model}` )
//     }
// }
//
// let car1 = new CarAudi('A6');
// let car2 = new CarAudi('A7');
// let car3 = new CarAudi('A8');
// let car4 = new CarAudi('A9');
// car1.viewInfo();

////                                   Class
// для удобства работы с конструкторами
// имя нужно с большой буквой

// Конструктор классов
// class CarObj {
//     constructor(name, model, img) {
//         this.carName = name;
//         this.carModel = model;
//         this.carImg = img;
//     }
//     render () {
//         console.log( this )
//
//     }
// }
// let img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.m.autoplius.lt%2Fnovyje-avtomobili%2Faudi%2Fa6&psig=AOvVaw0vQPM0XN18AKGVcXBhqJAz&ust=1586707355686000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiUu-Df4OgCFQAAAAAdAAAAABAX'
// let car1 = new CarObj('Audi', 'A6', img);
//
// // console.log(car1);
// car1.render();   // что-то выводит в консоль

