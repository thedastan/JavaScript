// setTimeout(() => {
//     console.log('Я вывожусь через 2 секунды')
// }, 2000);

// let timeout = setTimeout(() => {
//     console.log('Я первый таймаут')
// }, 3000);

// setTimeout(() => {
//     console.log('Этот сет таймаут остановил код выше')
//     clearTimeout(timeout)
// }, 1000);


// let i = 0;
// let interval = setInterval(() => {
//     console.log('Я выполняюсь каждые 3 секунды');
//     i++;
//     if(i > 3){
//         clearInterval(interval);
//     }
// }, 3000);



// let test = document.getElementById('secret-input');
// console.log(test.value);

// let test = document.getElementById('button-send');
// //
// // test.addEventListener('click', ()=>{
// //     test.style.background = 'red';
// //     console.log(test.classList.add('show'))
// // });
// // console.log(typeof document);

// let test = document.getElementsByClassName('example');
// console.log( Array.from(test).concat(4) );

// let test = document.getElementsByClassName('example')[1];
// console.log( test );

// let test = document.getElementsByTagName('li');
// console.log( test );

// let test = document.querySelectorAll('.example');
// console.log( test );

// let li = document.createElement('li');
// let ul = document.createElement('ul');
// li.innerText = 'Hello, im LI';
// ul.appendChild(li);
// console.log(ul);

// let test = document.querySelector('#button-send');
// console.log( test.hasAttribute('class') );

// let itemList = document.getElementsByClassName('list-item');
// let result = Array.from(itemList).reduce((acc, rec) => {
//     return [...acc, rec.textContent]
// }, []);
// console.log(result);




/////                                    Boolean

// let isEatingLunch = true;
// let isEatingDinner = false;
//
// console.log(isEatingLunch && isEatingDinner);
// console.log(isEatingLunch || isEatingDinner);
//
// console.log(isEatingLunch && {drink: 'water'});
// //// короткая запись
// // if(isEatingLunch){
// //     console.log({drink: 'water'})
// // }
// console.log(isEatingDinner && {drink: 'water'});
//
// console.log(isEatingLunch || {drink: 'water'});
// console.log(isEatingDinner || {drink: 'water'});

// const example = (data) => {
//     return data.id
// };
// console.log(example({id: 7}));

// const example = (data) => {
//     return (data || {id: 0}).id
// };
// console.log(example());


///////                                                  Задачи

////1
// const task1 = () => {
//     return document.getElementsByTagName('li')[0].textContent
// };
// console.log(task1());

////2
// const task2 = () => {
//     return Array.from(document.getElementsByTagName('li')).reduce(
//         (acc, rec) => {
//             return [...acc, rec.textContent]
//         }, [])
// };
// console.log( task2() );

////3
// const task3 = () => {
//     return Array.from(document.getElementsByClassName('list-item')).reduce(
//         (acc, rec) => {
//             return [...acc, rec.textContent]
//         }, [])
// };
// console.log( task3() );

////4
// const task4 = () => {
//     return Array.from(document.getElementsByClassName('list-item')).reduce(
//         (acc, rec) => {
//             return [...acc, rec.getAttribute('class')]
//         }, [])
// };
// console.log( task4() );

////5
// const task5 = () => {
//     return Array.from(document.querySelectorAll('.list-item')).reduce(
//         (acc, rec) => {
//             return [...acc, rec.getAttribute('data-test-id')]
//         }, [])
// };
// console.log( task5() );

////6
// const task6 = () => {
//     return Array.from(document.querySelectorAll('.list-item')).reduce(
//         (acc, rec) => {
//             if (rec.getAttribute('class').includes(rec.innerText)){
//                 return acc
//             }
//             return [...acc, rec.getAttribute('data-test-id')]
//         }, [])
// };
// console.log( task6() );

////7
// const task7 = () => {
//     return Array.from(document.querySelectorAll('.list-item')).reduce(
//         (acc, rec) => {
//             return [...acc, rec.innerText = `${rec.getAttribute('data-test-id')} ${rec.textContent}`]
//         }, [])
// };
// console.log( task7() );

////8
// const task8 = () => {
//     return Array.from(document.querySelectorAll('.list-item')).forEach(
//         el => {
//         if (el.getAttribute('class').includes(el.innerText)) {
//             return el;
//         }
//         return el.remove()
//     }, [])
// };
// console.log(task8());

////9
// const task9 = () => {
//     return Array.from(document.querySelectorAll('#secret-input')).reduce(
//         (acc, rec) => {
//             return [...acc, rec.setAttribute('value', "You were hacked !")]
//         }, [])
// };
// console.log( task9() );

//////10
// document.querySelector('#button-send').addEventListener('click',()=>{
//     document.querySelector('#secret-input').value = `You were hacked, ${document.querySelector('#secret-input').value}`;
//     setTimeout(()=>{
//         document.querySelector('#secret-input').value = 'You were hacked !'
//     },3000);
// });

