//1
// const arr = [];

// for (let i = 0; i < 5; i++) {
//     let input = prompt('Введите значение:');
//     arr.push(input);
// }

// const num = [];

// for (let el of arr) {
//     if (!isNaN(el) && el.trim() !== '') { 
//         num.push(Number(el)); 
//     }
// }

// if (num.length === 0) {
//     console.log('Массив пуст');
// } else {
//     console.log(num);
// }

//2
// const arr = [];

// for (let i = 0; i < 7; i++) {
//     let input = prompt('Введите значение:');
//         arr.push(Number(input));
// }
// const exclude1 = arr[5];
// const exclude2 = arr[6];

// const filteredArray = arr.slice(0, 5).filter(function(el){
//     return el !== exclude1 && el !== exclude2;
// })

// if (filteredArray.length === 0) {
//     console.log('Массив пуст');
// } else {
//     console.log(filteredArray);
// }

//3
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
//     if (isNaN(input) || input.trim() === '') {
//         console.log('Не число');
//         break; 
//     } else {
//         arr.push(Number(input)); 
//     }
// }

// const result = [];
// arr.forEach(function(el) {
//     if (!result.includes(el)) {
//         result.push(el);
//     }
// });

// if (result.length === 0) {
//     console.log('Массив пуст');
// } else {
//     console.log(result);
// }

//4
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
//     if (isNaN(input)) {
//         console.log('Не число');
//         break; 
//     } else {
//         arr.push(Number(input)); 
//     }
// }
// let result = 1;
// arr.forEach(function(el) {
//     result*=el;
// });
// console.log(result);

//5
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
    
//         arr.push(Number(input)); 
// }
// const result = arr.some(function(el){
//     return !isNaN(el)
// })
// console.log(result)

//6
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
    
//         arr.push(Number(input)); 
// }
// const result = arr.every(function(el){
//     return !isNaN(el)
// })
// console.log(result)

//7
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
//     if (isNaN(input)) {
//         console.log('Не число');
//         break; 
//     } else {
//         arr.push(Number(input)); 
//     }
// }
// let result = 0;
// arr.forEach(function(el) {
//     result+=el;
// });
// console.log(result);

//8
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
//     if (isNaN(input)) {
//         console.log('Не число');
//         break; 
//     } else {
//         arr.push(Number(input)); 
//     }
// }
// const result = arr.map(function(el){
//     return el%2==0 ? 'чет': 'неч'
// })
// console.log(result);

//9
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
    
//     if (typeof input === 'string' && input.trim() !== '') {
//         arr.push(input); 
//     } else {
//         console.log('Пожалуйста, введите корректное текстовое значение.');
//         i--; 
//     }
// }

// const result = arr.filter(function(el) {
//     return el.startsWith('a') || el.startsWith('h');
// });

// if (result.length === 0) {
//     console.log('Массив пуст');
// } else {
//     console.log(result);
// }

//10
// const a = "javascript";
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
    
//     if (typeof input === 'string' && input.trim() !== '') {
//         arr.push(input); 
//     } else {
//         console.log('Пожалуйста, введите корректное текстовое значение.');
//         i--; 
//     }
// }
// let arr1=[];
// arr.forEach(function(el)
// {
//     if(el.includes(a))
//         arr1.push(el)
// })
// console.log(arr1)

//11
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
    
//     if (typeof input === 'string' && input.trim() !== '') {
//         arr.push(input); 
//     } else {
//         console.log('Пожалуйста, введите корректное текстовое значение.');
//         i--; 
//     }
// }
// const arr1 = arr.map(function(el) {
//     return `#${el}`; 
// });
// let arr2=[];

// arr.forEach(function(el){
//     arr2.push(`#${el}`);
// })

// console.log(arr1)
// console.log(arr2)

//12
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
//     arr.push(input); 
// }

// let arr1=[];
// let arr2=[];
// arr.forEach(function(el){
//          if(isNaN(el))
//             arr1.push(el)
//         else
//             arr2.push(el)
// })
// console.log(arr1)
// console.log(arr2)

//13
// const arr = [];
// const n = Number(prompt('Введите количество'));

// for (let i = 0; i < n; i++) {
//     let input = prompt('Введите значение:');
//     const num = Number(input);
    
//     if (!isNaN(num) && input.trim() !== '') {
//         arr.push(num); 
//     } else {
//         console.log('Пожалуйста, введите корректное значение.');
//         i--; 
//     }
// }

// const arr1 = arr.map(function(el) {
//     return el ** 2; 
// });
// console.log(arr1);

//14
// const input1 = prompt("Введите первый массив");
// const input2 = prompt("Введите второй массив");

// const array1 = input1.split(',').map(Number);
// const array2 = input2.split(',').map(Number);

// const combinedArray = [...array1, ...array2];

// console.log(combinedArray);

//15
// function sum(...numbers) {
//     return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// console.log(sum(1, 2, 3))
// console.log(sum(4, 5, 6, 7))

//16
// const inputArray = prompt("Введите массив");
// const additionalNumber = prompt("Введитe число");
// const numbersArray = inputArray.split(',').map(Number);

// const newArray = [Number(additionalNumber), ...numbersArray];
// console.log(newArray);

// 17
// function toUpperCase(...args){
//     let uppercased = [];
//     for (let arg of args) {
//         uppercased.push(arg.toUpperCase());
//     }
//     console.log(uppercased);
// }
// toUpperCase('apple', 'banana', 'cherry')

// 18
// const a = [2, 3, 4]
// const result = a.reduce(function (proiz, elem){
//     return proiz * elem
// }, 1)
// console.log(result)

// 19
// const a = [1, 'a', 3, 'b', 5]
// const result = a.reduce(function (count, elem){
//     if(!isNaN(elem))
//         return count + 1
//     return count
// }, 0)
// console.log(result)

// 20
// const a = ["apple", "banana", "cherry"]
// const result = a.reduce(function (str, elem){
//     return str + elem + ','
// }, '')
// console.log(result.slice(0, -1))

// 21
// const a = [3, 7, 2, 5]
// const result = a.reduce(function(max, elem){
//     if(elem > max)
//         max = elem
//     return max
// }, a[0])
// console.log(result)

// 22
// const a = [1, 2, 3, 4] 
// const result = a.map(function(elem, index){
//     return elem * index
// })
// console.log(result)

// 23
// const a = [2, 4, 6, 9]
// const result = a.every(function(elem){
//     if (elem % 2 === 0) return true
//     else return false
// })
// console.log(result)

// 24
// const a = [1, -2, -3, -4]
// const result = a.some(function(elem){
//     if (elem > 0) return true
//     else return false
// })
// console.log(result)

// 25
// const a = ["apple", "banana", "cherry"]
// const result = a.map(function(elem){
//     return elem.length
// })
// console.log(result)

// 26
// const a = ["apple", "banana", "cherry"]
// const result = a.every(function(elem){
//     if (elem.length > 3) return true
//     else return false
// })
// console.log(result)

// 27
// const a = ["apple", "banana", "cat"]
// const result = a.filter(function(elem){
//     if (elem.length < 5) return true
//     else return false
// })
// console.log(result)


// 28
// const a = ["apple", "banana", "cherry"]
// const result = a.map(function(elem){
//     return elem.toUpperCase()
// })
// console.log(result)

// 29
// const a = [-10, 20, 30]
// const result = a.filter(function(elem){
//     if (elem > 0) return true
//     else return false
// })
// console.log(result)

// 30
// const a = [10, 3, 5, 7]
// const result = a.reduce(function(min, elem){
//     if(elem < min)
//         min = elem
//     return min
// }, a[0])
// console.log(result)
