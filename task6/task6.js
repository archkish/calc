// //  task Object.entries  

// const cities = {
//     kharkiv: 20,
//     kyiv: 10,
//     odesa: 0,
//     lviv: 3,
//   }
  

// function filterCities () {
//     let str = ''
//     for (let [key, value] of Object.entries(cities)) {

//         if( value > 0 ) {
//             str += `${key}, `
//         } 

//     }
//     let bstr =`${str.slice(0, str.length - 2)}.`
//     console.log(bstr)
// }
// filterCities ()

// // task Object.values

// const groups = {
//     groupA: [12, 23, 55, 1, 27, 90],
//     groupB: [6, 3, 67, 98, 11],
//     groupC: [33, 9, 45, 66],
//   }

//   function calcNumbers (obj) {
//     let sum = 0

//     for(let value of Object.values(obj)) {
//         sum += value.length
//     }

//     console.log(`Кількість всих учасників ${sum}.`)

//   }

//   calcNumbers (groups)

// // task Object.keys 

// const members = {
//     John: 5,
//     James: 89,
//     Andrii: 34,
//     Olga: 66,
//     Michael: 58,
//   }
  
// function refreshPoints(obj) {
//     for(let key of Object.keys(obj)) {
//         members[key] = 0;
        
//     }
   
//     console.log(members)
// }

// refreshPoints(members)

// // На деструктуризацію

// let array = [1, 2, 3, 4, 5]
// // task 1

// // let[elem1, elem2, elem3, ...arr] = array
// // console.log(elem1)
// // console.log(elem2)
// // console.log(elem3)
// // console.log(arr)

// // task 2
// // let[elem1] = array.slice(-1)
// // let[elem2] = array.slice(-2)
// // console.log(elem1, elem2)

// // task 3

// // let[, elem2] = array
// // console.log(elem2)

// // task 4

// // let [, elem2 = 'bbb', elem3 = 'eee'] = array
// // console.log(elem2)

// // task 5

// // let obj = {
// //     name: 'Петр',
// //     surname: 'Петров',
// //     age: '20 лет'
// // }

// // let {name, surname, age} = obj;
// // console.log(name)

// // task 6

// // let object = {
// //     name: 'Петр',
    
// //     age: '20 лет'
// // }

// // let {name = 'Аноном', surname = 'Анонимович', age = '? лет'} = object;
// // console.log(surname)

// // На ітератори

// // task 7
// function e() {
// let one = [1, 2, 3, 4, 5]

// for(let i = 0; i < one.length; i++) {
//     console.log(one[i])
// }
// }
// e()

// // task 8
// function r() {
//     let two = [1, 2, 3, 4, 5]

//     for(let i = 0; i < two.length; i++) {
//         console.log(two.reverse()[i] )
//     }
// }
// r()

// // task 9 
// function t() {
//     let three = [1, 2, 3, 4, 5]
//     let sum = 0
//     for(let i = 0; i < three.length; i++) {
//         sum += three[i]
//     }
//     console.log(sum)
// }
// t()

// // task 10

// function w() {
//     let str = 'osyutuoooo'
//     let counter = 0;

//     for(let key of str) {
//         if(key === 'o') {
//             counter++ 
//         }
//     }
//     console.log(counter)
// }
// w()

// // на функції

// // task 11
// function showName(name = 'Анонім') {
//     let res = `Привіт, ${name}`
//     console.log(res)

// }

// showName()

// // task 12
// let setings = {
//     id: 'elem',
//     color: 'red',
//     border: '2px solid red',
//     font: '25px Arial'
// }

// function getSet(setings) {
//     let {id, color = 'blue', border = '1px solid red', font = '15px Arial'} = setings
//     id = `${id}: ${color}, ${border}, ${font}.`
//     console.log(id)
// }

// getSet(setings)

// task 13

let t = document.querySelectorAll('.timer');
    for (let i = 0; i < t.length; i++) {
        let counter = 0;
        t[i].onclick = function time() {
            counter ++
            let t2 = document.querySelectorAll('.timer')
            for(let k = 0; k < t2.length; k++) {
                t2[i].innerHTML = counter
            }
            setTimeout(time, 1000)
        }
    }


