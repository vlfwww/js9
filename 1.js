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
const arr = [];
const n = Number(prompt('Введите количество'));

for (let i = 0; i < n; i++) {
    let input = prompt('Введите значение:');
    const num = Number(input);
    
    if (!isNaN(num) && input.trim() !== '') {
        arr.push(num); 
    } else {
        console.log('Пожалуйста, введите корректное значение.');
        i--; 
    }
}

const arr1 = arr.map(function(el) {
    return el ** 2; 
});
console.log(arr1);