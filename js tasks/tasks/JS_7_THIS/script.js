////  this / chaining
////  promises
////           Повторение

////                                        this
//  this возвращает контекст текущего объекта
//  Контекст - это тело родительский объект
//  В стрелочных функциях this не работает, только в function
//  При стрел-ой ф-ии - this указывает на родитель родительского объекта

// let test = {
//     props: 25,
//     func: function () {
//         // return 'Hi'
//         return this.props
//     },
//     func2: function () {
//         return 'Kitty'
//     }
// };
// console.log( test.func() );
// console.log( test.func2() );

// let kitty = {
//     name: 'Kitty',
//     tasks: ['спать', 'есть', 'шуметь'],
//     showTasks: function () {
//         return this.tasks
//     }
// };
// console.log( kitty.showTasks() );

// let kitty = {
//     name: 'Kitty',
//     tasks: ['спать', 'есть', 'шуметь'],
//     showTasks: function () {
//         this.tasks.forEach((task) => {
//             console.log(`${this.name} хочет ${task}`);
//         });
//     }
// };
// kitty.showTasks();


////                                      Chaining

// const arr = [7, 4, 7];

// console.log(   arr
//     .map( el => el * 2)
//     .filter( el => el % 4 === 0)
// );

// function init(nmb) {
//     let value = nmb;
//     return {
//         add: function (val) {
//             value = value + val;
//             return this
//         },
//         sub: function (val) {
//             value = value - val;
//             return this
//         },
//         value: function () {
//             return value
//         }
//     }
// }
// console.log( init(0).add(10).add(30).add(70).sub(1).value() );

////                                    promises

// let a = 100;
// setTimeout( () => {
//     a = 200;
// }, 4000);
// console.log( a );

// let a = 100;
//
// let p = new Promise( function (resolve, reject) {
//     setTimeout( () => {
//         resolve( a = 200)
//     }, 4000)
// })
//     .then( (result) => {
//         throw new Error('Something wrong');
//         console.log(result)
// })
//     .catch( (err) => {
//         console.log(err)
//     }) .then( (body) => {
//         console.log('body')
//     });

////                                               fetch  (только в браузере и в новом JS)

// console.log( fetch('https://jsonplaceholder.typicode.com/posts/1') );

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then( (result) => console.log(result) )
//     .catch( (err) => console.log( error ) );

// const getString = (id) => {
//     return `https://jsonplaceholder.typicode.com/posts/${id}`
// };
//
// function getPost( id ) {
//     return fetch( getString(id) )
// }
//
// getPost( 5 )
//     .then( (result) => result.json() )
//     .then( (data) => console.log(data) ) ;


////                             axios ( в jsComplete )

// const getString = (id) => {
//     return `https://jsonplaceholder.typicode.com/posts/${id}`
// };
//
// function getPostAxios(id) {
//     return axios.get( getString(id) )
// }
//
// getPostAxios(7)
//     .then(result) => display.log(result)

// axios.get( 'https://jsonplaceholder.typicode.com/posts/4')
//     .then( (result) => display.log(result) )

// _______________________


////                                 Повторение

// arrays / object
// carrying function
// closure // this // chaining
// async function
// Как правильно думать перед решением задачи

// let array1 = [1, 2, 3, 4];
// let array2 = [3, 5, 7, 9];
// let array3 = array1.concat(array2);  //объединить два массива
// let array4 = [...array1, ...array2];   //объединить два массива
// const array5 = array4.filter( (elem, index, array) => array.indexOf(elem) === index ); // 1способ
// const array6 = array4.reduce( (acc, elem, index) =>{   // 2способ
//     if(array4.indexOf(elem) === index){
//         return [...acc, elem]
//     }
//     return acc
// }, []);

// console.log(array3);
// console.log(array4);
// console.log(array5);
// console.log(array6);

// const user = {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//     "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//     }
//   }
// };
// const id = 'email';

// console.log( user.id );
// console.log( user['id'] );
// console.log( user[id] ); console.log( user['email'] );
// console.log( {[id] : 'id'} );
// console.log( {[id] : [id]} ); console.log( {[id] : ['email']} );

       // когда ключ в [], то переменная
       // когда значение в [], то массив

// console.log( { [id] : [id], ...user } );  //кто последний перезаписывает значение ключа


//         Carrying

// const compose = (prefix, name) => {
//     return `${prefix} ${name}`
// };
//
// console.log( compose('Ivanov', 'Ivan') );
// console.log( compose('Ivanov', 'Nurlan') );
// console.log( compose('Ivanov', 'Mirlan') );

// let compose = (prefix) => (name) => {
//     return `${prefix} ${name}`
// };
// let composeResult = compose('Ivanov');
//
// console.log( composeResult('Ivan') );
// console.log( composeResult('Nurlan') );
// console.log( composeResult('Mirlan') );

// const compose = (serviceName) => {
//     return (path) => {
//         return (queryParams) => {
//             return `${serviceName}/${path}${queryParams ? `?${queryParams}` : ''}`
//         }
//     }
// };
// const googleQueryCurrying = compose('http://google.com');
//
// const searchGoogle = googleQueryCurrying('search');
// const analyticsGoogle = googleQueryCurrying('analytics');
//
// console.log(searchGoogle('query=1'));
// console.log(searchGoogle('query=erverv=vk.com'));
// console.log(analyticsGoogle('query=erverv=vk.com'));
// console.log(analyticsGoogle('query=3'));





// const array = [5, 3, 2, 1, 4]
//
// const getPlanet = (id) => ` https://swapi.co/api/planets/${id}/`;
// const getFilm = (id) => `https://swapi.co/api/films/${id}/`;
// const getSpecies = (id) => `https://swapi.co/api/species/${id}/`;
//
// function getAxious(id) {
//     return axios.get( getPlanet(id) )
// };
//
// getAxious( 3 )
//     .then( ( { data } ) => {
//         return axios.get( getFilm( 1 ) )
//             .then( ( {data} ) => {
//                 display.log( data );
//
//                 Promise.all( array.map( it => {
//                     return axios.get( getSpecies( it ) )
//                 } ))
//                     .then( results => {
//                         return results.map( it => it.data ).forEach( it => {
//                             display.log( it )
//                         })
//                     })
//             })
//     })

// Promise.all( array.map( it => {
//   return getAxious(it)
// } ) ) .then( results => {
//  return results.map( it => it.data ).forEach( it => {
//    display.log(it)
//  })
// })

// Promise.all( array.map( it => {
//   return getAxious(it)
// } ) ) .then( results => {
//  display.log( results)
// })






// const array = [1]

// const getFilm = (id) => `https://swapi.co/api/films/${id}/`

// function getAxious(id) {
//   return axios.get( getFilm(id) )
// }

// Promise.all( array.map( it => {
//   return getAxious(it)
// } ) ).then(results => {
//  return results.map(it => it.data).forEach(it => {
//    display.log(it)
//  })
// })


// const array = [5, 3, 2, 1, 4]

// const getSpecies = (id) => `https://swapi.co/api/species/${id}/`

// function getAxious(id) {
//   return axios.get( getSpecies(id) )
// }

// Promise.all( array.map( it => {
//   return getAxious(it)
// } ) ).then(results => {
//  return results.map(it => it.data).forEach(it => {
//    display.log(it)
//  })
// })



// const getPlanet = (id) => {
//     return `https://swapi.co/api/planets/${id}/`
// };
// function getAxios (id) {
//     return axios.get( `https://swapi.co/api/planets/${id}/` )
// };
// getAxios(3).then( ( { data } ) => {
//     display.log(data)
//   }
// )


// axios.get( 'https://swapi.co/api/planets/4')
// .then( (result) => display.log(result) )



// getAxios(3).then( ( { data } ) => {
//     display.log( Object.keys(data).map( el => data[el] ) )
//   }
// )
















