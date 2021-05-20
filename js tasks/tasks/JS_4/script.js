// let array = [4,5,7];
// array.forEach((item)=>console.log(item*2));


// const users = ['John', 'Anna', 'Bob', 'Andrew'];
// const names = users.find(item => item.indexOf('A') === 0);
// const longNames = users.filter(item => item.length > 4);
// console.log(names);
// console.log(longNames);

// const obj = {
//     name: 'Igor',
//     job: 'Developer'
// };
// const newObj = {...obj, ...{id: 5, job: 'developer'}};
// console.log(newObj);

//                                     R  E  D  U  C  E
// let array = [4,3,2,1,5,6,3];
// let result = array.reduce(
//     (acc, rec) => acc + rec,
//     0
// );
// console.log(result);

// let array = [4, undefined,5,6,undefined,7,4,2,1];
// let result = array.reduce(
//     (acc, rec) => acc + (typeof rec !== 'undefined' ? rec : 0),
//     []
// );
// console.log(result);
//
// let array = [4, undefined,5,6,undefined,7,4,2,1];
// let result = array.reduce(
//     (acc, rec) => acc.concat(typeof rec !== 'undefined' ? rec : []),
//     []
// );
// console.log(result);


const users = [{
    "id": 1,
    "first_name": "Zora",
    "last_name": "Huertas",
    "email": "zhuertas0@odnoklassniki.ru",
    "ip_address": "73.91.189.247"
}, {
    "id": 2,
    "first_name": "Zuzana",
    "last_name": "Jirus",
    "email": "zjirus1@reverbnation.com",
    "ip_address": "221.81.92.35"
}, {
    "id": 3,
    "first_name": "Goldina",
    "last_name": "Lannin",
    "email": "glannin2@storify.com",
    "gender": "Female",
    "ip_address": "135.114.183.203"
}, {
    "id": 4,
    "first_name": "Giacobo",
    "last_name": "Giscken",
    "email": "ggiscken3@usnews.com",
    "ip_address": "201.168.173.253"
}, {
    "id": 5,
    "first_name": "Kahlil",
    "last_name": "Bootton",
    "email": "kbootton4@dion.ne.jp",
    "gender": "Male",
    "ip_address": "27.5.113.174"
}, {
    "id": 6,
    "first_name": "Amalita",
    "last_name": "Brashaw",
    "email": "abrashaw5@themeforest.net",
    "gender": "Female",
    "ip_address": "217.230.197.35"
}, {
    "id": 7,
    "first_name": "Brittaney",
    "last_name": "Stow",
    "email": "bstow6@marketwatch.com",
    "gender": "Female",
    "ip_address": "27.115.198.218"
}, {
    "id": 8,
    "first_name": "Stanislaus",
    "last_name": "Waskett",
    "email": "swaskett7@hao123.com",
    "ip_address": "63.129.121.202"
}, {
    "id": 9,
    "first_name": "Melinde",
    "last_name": "Manuel",
    "email": "mmanuel8@ask.com",
    "gender": "Female",
    "ip_address": "221.63.28.104"
}, {
    "id": 10,
    "first_name": "Page",
    "last_name": "Hrishanok",
    "email": "phrishanok9@addtoany.com",
    "ip_address": "73.71.27.200"
}, {
    "id": 11,
    "first_name": "Abraham",
    "last_name": "Keates",
    "email": "akeatesa@intel.com",
    "ip_address": "63.2.7.145"
}, {
    "id": 12,
    "first_name": "Joni",
    "last_name": "Teager",
    "email": "jteagerb@google.ru",
    "gender": "Female",
    "ip_address": "92.225.8.194"
}, {
    "id": 13,
    "first_name": "Virginia",
    "last_name": "Rappaport",
    "email": "vrappaportc@hostgator.com",
    "ip_address": "195.175.0.17"
}, {
    "id": 14,
    "first_name": "Brnaba",
    "last_name": "Seeks",
    "email": "bseeksd@dailymotion.com",
    "gender": "Male",
    "ip_address": "89.121.197.82"
}, {
    "id": 15,
    "first_name": "Melania",
    "last_name": "Crowcum",
    "email": "mcrowcume@etsy.com",
    "ip_address": "154.136.64.17"
}, {
    "id": 16,
    "first_name": "Alessandra",
    "last_name": "Hrishchenko",
    "email": "ahrishchenkof@nytimes.com",
    "ip_address": "40.146.181.196"
}, {
    "id": 17,
    "first_name": "Cris",
    "last_name": "Burthom",
    "email": "cburthomg@dailymotion.com",
    "gender": "Female",
    "ip_address": "57.93.188.131"
}, {
    "id": 18,
    "first_name": "Marthena",
    "last_name": "Camoys",
    "email": "mcamoysh@constantcontact.com",
    "gender": "Female",
    "ip_address": "243.248.35.236"
}, {
    "id": 19,
    "first_name": "Robert",
    "last_name": "Kotick",
    "email": "rsacksi@prlog.org",
    "gender": "Male",
    "ip_address": "14.31.17.249"
}, {
    "id": 20,
    "first_name": "Rolland",
    "last_name": "Sacks",
    "email": "nmelchiorj@wikimedia.org",
    "ip_address": "148.26.76.58"
}];

// let result = users.reduce(
//     (acc, rec)=>{
//         if(typeof acc[rec.gender] === 'undefined'){
//             return {...acc, [rec.gender] : [`${rec.first_name} ${rec.last_name}`]}
//         }
//         return {...acc, [rec.gender] : acc[rec.gender].concat([`${rec.first_name} ${rec.last_name}`])}
//     },
//     {}
// );
// console.log(result);

/////////                                   Задачи    (сложные)  Homework (tasks 1 - 12)

////1    Способ-1
// const task1 = (arr1, arr2) => {
//        let result = arr1.reduce((acc, rec) => {
//                if(arr2.indexOf(rec) >= 0){
//                    return acc.concat(rec)
//                }
//                return acc
//            }, []);
//        return result.filter((item,id,array) => array.indexOf(item) === id );
// };
// console.log(task1([1, 2, 3, 1, 1, 1, 4, 5], [1, 12, 3, 8, 5]));

////1    Способ-2
// const task1_2 = (arr1, arr2) => {
//     return arr1.reduce((acc, rec) => {
//         if(arr2.includes(rec)){
//             return [...acc, rec]
//         }
//         return acc
//     }, []).filter((item,id,array) => array.indexOf(item) === id );
// };
// console.log(task1_2([1, 2, 3, 1, 1, 1, 4, 5], [1, 12, 3, 8, 5]));

////2
// const task2 = (arr) =>{
//     return arr.reduce((acc, rec) => {
//         return {...acc, [rec.token] : rec }
//     }, {});
// };
// console.log(task2( [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));

//////3
// const task3 = (arr) => {
//     return arr.reduce((acc, rec) => {
//        if(typeof acc[rec] === 'undefined'){
//            return {...acc, [rec] : 1}
//        }
//         return {...acc, [rec] : acc[rec] + 1}
//     }, {});
// };
// console.log(task3(['a', 'b', 'a', 'b', 'c', 'a']));

//////4
// const task4 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, ...rec]
//     }, []);
// };
// console.log(task4([['ab','abc'],['abcd']]));

//////5
// const task5 = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         return [...acc, [rec, obj[rec]]]
//     }, []);
// };
// console.log(task5({a:1,b:2}));

//////6
// const task6 = (arr) => {
//     return arr.filter((item, index) => arr.indexOf(item) === index)
// };
// console.log(task6([true, false, true,true]));

//////7  +
// const task7 = (key, value, array) => {
//     return array.reduce((acc, rec) => {
//         if(rec[key].includes(value)){
//             return [...acc, rec]
//         }
//         return acc
//     }, []);
// };
// console.log( task7( 'title', 'hello', [{title: 'hello world', rating: 1},
//                  {title: 'not a helloo', rating: 5}, {title: 'new World', rating: 0}] ) );

//////8 +++
// const task8 = ( str ) => {
//     return str.split('/').filter( item => item !== "").reduce( (acc, rec, index) => {
//         return [...acc, ` { "id" : ${index} , "token" : "${rec}" } `]
//     }, [] );
// };
// console.log(task8( 'http://google.com/hello/world' ));

// const task8 = ( str ) => {
//        return str.split('/').filter( item => item !== "").map( (el, id) =>
//            ` { "id" : ${id} , "token" : "${el}" } ` )
// };
// console.log(task8( 'http://google.com/hello/world' ) );


////9 +
// const task9 = (str) => {
//     return str.split(',').map(el => `${el}(${el.length})`).join()
// };
// console.log(task9( 'hello,world,abra,carabfa,re,wrewer,rwer' ));

////////10 +
// const task10 = host => baseUrl => {
//     return `${host}${baseUrl}`
// };
//
// const baseRequest = task10('http://google.com/');
//
// console.log( baseRequest( 'search') );


////////11 +
// function task11(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }
// console.log( task11(1)(2)(3));

// const sum = a => b => c => a + b + c;
//
// console.log( sum(1)(2)(3));

////////12 +
// const task12= (arr, num) => {
//     let counter = -num;
//     return arr.split("").reduce((acc, rec, index, array) => {
//         counter = counter +num;
//         return [ ...acc, array.slice(counter, counter + num) ]
//     }, []).filter( el => el.length )
// };
// console.log( task12( "abracadabra", 4 ) );


////                                                           Parse

//                            Booking

// Object.assign({},
//     {
//         name: document.getElementById('hp_hotel_name').textContent,
//         stars: document.querySelector('.star_track').getAttribute('title'),
//         facilities: Array.from(document.querySelectorAll('.important_facility')).map( el => el.getAttribute('data-name-en')) ,
//         rooms: Array.from(document.querySelectorAll('.togglelink')).map( el => el.getAttribute('data-room-name-en'))
//     }
// );

// function parse() {
//    return {
//         name: document.getElementById('hp_hotel_name').textContent,
//             stars: document.querySelector('.star_track').getAttribute('title'),
//         facilities: Array.from(document.querySelectorAll('.important_facility')).map( el => el.getAttribute('data-name-en')) ,
//         rooms: Array.from(document.querySelectorAll('.togglelink')).map( el => el.getAttribute('data-room-name-en'))
//     }
// }

// Object.assign({},
// //     {name: Array.from(document.getElementsByClassName('hp__hotel-name')).reduce((acc, rec) => {
// //         return (rec.textContent)
// //     }, ''),
// //     stars: Array.from(document.getElementsByClassName('star_track')).reduce((acc, rec) => {
// //         return (rec.getAttribute('title'))
// //     }, ''),
// //     facilities: Array.from(document.getElementsByClassName('important_facility')).reduce((acc,rec)=>{
// //         return [...acc, rec.textContent]
// //     },[]),
// //     rooms: Array.from(document.getElementsByClassName('togglelink')).reduce((acc,rec)=>{
// //         return [...acc, rec.getAttribute('data-room-name-en')]
// //     },[])       }       );
// //

////                                  Amazon

// // Object.assign({},
//     {name: Array.from(document.getElementsByClassName('a-size-large')).reduce((acc, rec) => {
//             return (rec.textContent)
//         }, ''),
//         stars: Array.from(document.getElementsByClassName('a-icon-alt')).reduce((acc, rec) => {
//             return (rec.textContent)
//         }, ''),
//         description: Array.from(document.getElementsByClassName('a-section a-spacing-small')).reduce((acc,rec)=>{
//             return (rec.textContent)
//         }, ''),
//         tags: Array.from(document.getElementsByClassName('cr-lighthouse-term ')).reduce((acc,rec)=>{
//             return [...acc, rec.textContent]
//         },[])       }       );

// function parse() {
//     return {
//         name: document.getElementById('title').textContent,
//         stars: document.querySelector('.a-icon-alt').textContent,
//         facilities: document.querySelector('.a-spacing-small').textContent ,
//         rooms: Array.from(document.querySelectorAll('.cr-lighthouse-term')).map( el => el.getAttribute('data-room-name-en'))
//     }
// }

//////                                Шаблоны

// let acc = {};
// acc.male = [];
// acc.female = [];
// acc.male = ['Ivan'];
// acc.male = acc.male.concat('Islam');
// console.log(acc);


// 1
// const list = [1,2,3,4,5,-6,7,-8];
// const table= list.find(number => number < 0);
// console.log(table);


// 2
// const users = [
//     {name:'Игорь', id:1},
//     {name:'Бека', id:2},
//     {name:'Айжамал', id:3}
// ];
// const data = users.find(item => item.name ==='Бека');
// console.log(data);


// 3
// const animals = ['cat', 'kitty', 'dog', 'puppy'];
// const shortNames = animals.filter(item => item.length < 4);
// console.log(shortNames);


// 4
// const students = [
//     {name:'Игорь', id:1},
//     {name:'Бека', id:2},
//     {name:'Вася', id:1, age:24},
//     {name:'Петя', id:2, age:25}
// ];
// const objStudents = students.filter((item, id) => id > 1);
// console.log(objStudents);


//5
// const workers = [
//     {name:'Вася', id:1, age:24},
//     {name:'Петя', id:2, age:25},
//     {name:'Олег', id:3, age:26}
// ];
// const objW = workers.filter(item => item.id === 3);
// const objWorkers = objW.map(item => item.age = 30);
// console.log(objWorkers);

// 6
// const people = [
//     {name:'Вася', id:1, age:24},
//     {name:'Петя', id:2, age:25},
//     {name:'Олег', id:3, age:26}
// ];
// const objP = people.filter(item => item.id === 3);
// const objPeople1 = objP.map(item => item.name = 'Дима');
// const objPeople2 = objP.map(item => item.age = '18');
// console.log(objPeople1);
// console.log(objPeople2);
//
// const objPeople = {...people[2], ...{name: 'Дима', age: 18}};
// console.log(objPeople);


//                                                     Задачи:
//// 1
// let test1 = (arr1, arr2) =>{
//        return arr1.reduce((acc, rec, index) => {
//               return [...acc, (rec + arr2[index])]
//            }, []);
// };
// console.log(test1([2, 4],[1, 3]));

//// 2
// let test2 = (arr) =>{
//     return arr.reduce((acc, rec) => {
//         return [...acc, (rec * 2)]
//     }, []);
// };
// console.log(test2([1, 2, 3, 4,5]));

//// 3
// let test3 = (arr) =>{
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.id]
//     }, []);
// };
// console.log(test3([{id: 1}, {id: 2}, {id: 3}, {id: 4}]));

//// 4
// let test4 = (arr) =>{
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div>${rec}<div/>`]
//     }, []);
// };
// console.log(test4([1, 2]));

//// 5
// let test5 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec.length % 2) {
//             return acc
//         }
//         return [...acc, rec];
//     }, []);
// };
// console.log(test5(['ab', 'abc', 'abcd']));

//// 6
// let test6 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec * 2 % 10) {
//             return acc
//         }
//         return [...acc, (rec * 2)];
//     }, []);
// };
// console.log(test6([1, 2, 3, 7, 10, 5]));

//// 7
// let test7 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec) {
//             return [...acc, rec];
//         }
//         return acc
//     }, []);
// };
// console.log(test7([true, false, true, true]));

//// 8
// let test8 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (typeof rec !== 'undefined') {
//             return [...acc, rec]
//         }
//         return acc;
//     }, []);
// };
// console.log(test8( [true, false, true,true, undefined, true, undefined]));


//// 9
// let test9 = (arr) => {
//     return arr.reduce((acc, rec, index) => {
//         return [arr[0] && arr[1] && arr[2]]
//     }, []);
// };
// console.log(test9( [true, false, true]));

//// 10
// let test10 = (arr) => {
//     return arr.reduce((acc, rec, index) => {
//         if(index === 0){
//             return {...acc, field1 : rec}
//         } else if(index === 1){
//             return {...acc, field2 : rec}
//         } else if(index === 2){
//             return {...acc, field3 : rec}
//         } else{
//             return {...acc, field4 : rec}
//         }
//     }, {});
// };
// console.log(test10( [true, 1, 'wow', 'you are smart, bro']));

// 11  не смог
// let test11 = (arr) => {
//     return arr.reduce((acc, rec) => {
//        if(){
//            return {rec}
//        }
//        return acc;
//     }, {});
// };
// console.log(test11( { name: 'pilot', isActive: true }));

// 12  не смог
// let test12 = (arr) => {
//     return arr.reduce((acc, rec) => {
//        if(){
//            return [rec]
//        }
//        return acc;
//     }, []);
// };
// console.log(test12( { isActive: false, isPilot: true }));

//// 13
// let test13 = (arr)=>{
//     let result = arr.reduce(
//         (acc,rec)=>{
//             let sum = acc + rec;
//             return sum
//         },
//         0
//     );
//     return result/arr.length
// };
// console.log(test13([2,4]));

// 14  не смог
// let test14 = (arr) => {
//     return arr.reduce((acc, rec, index) => {
//         return rec
//     }, []);
// };
// console.log(test14( [ (a) => a+ 1, (a) => a * 2 ], 5));