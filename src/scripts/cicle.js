let array = new Array();
let array1 = [];

// let arr2 = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// Методы pop/push, shift/unshift

// let fruits = ["Яблоко"];
//
// fruits.push("Апельсин", "Груша");
// fruits.unshift("Ананас", "Лимон");

// let arr = ["Яблоко", "Апельсин", "Груша"];
//
// for (let key in arr) {
//     wr( arr[key] ); // Яблоко, Апельсин, Груша
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let arr = [1, 2, 3];
//
// wr( arr ); // 1,2,3
// wr( String(arr) === '1,2,3' ); // true

// wr( [] + 1 ); // "1"
// wr( [1] + 1 ); // "11"
// wr( [1,2] + 1 ); // "1,21"

// arr.push(...items) – добавляет элементы в конец,
//     arr.pop() – извлекает элемент из конца,
//     arr.shift() – извлекает элемент из начала,
//     arr.unshift(...items) – добавляет элементы в начало.

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// wr(arr.splice(0, 2));
// wr( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
// wr( arr.concat([3, 4]) ); // 1,2,3,4
// arr.forEach(function(item, index, array) {});
// // indexOf/lastIndexOf и includes
// let result = arr.find(function(item, index, array) {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
// });
// let results = arr.filter(function(item, index, array) {
//     // если `true` -- элемент добавляется к results и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
// });
// let result = arr.map(function(item, index, array) {
//     // возвращается новое значение вместо элемента
// });
// arr.sort(function(a, b) { return a - b; });
// arr.reverse();
// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');
// let str = arr.join(';'); // объединить массив в строку через ;
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
// }, [initial]);
//
// let result = arr.reduce((sum, current) => sum + current, 0);

// Большинство методов поддерживают «thisArg»


// let condition = true;
// while (condition) {
//     // код
//     // также называемый "телом цикла"
// }
//
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     alert( i );
//     i++;
// }

// for (начало; условие; шаг) {
//     // ... тело цикла ...
// }

// for (;;) {
//     // будет выполняться вечно
// }

// let sum = 0;

// while (true) {
//     let value = + (sum + 55) ;
//     sum += value;
// }
// wr( 'Сумма: ' + sum );

// ?
// let j = 3;
// while (j) {
//     wr( j-- );
// }

//Выведи чётные числа

// for (variable in object) {
//     выражения
// }

// let obj = {model: 'AUDI A8', year: '2019', color: 'brown'}
//
// for (key in obj) {
//     wr(`${key} = ${obj[key]}`);
// }
// // model = AUDI A8
// // year = 2019
// // color = brown
//
// let arr = [3, 5, 7];
// arr.foo = "hello";
//
// for (let i in arr) {
//     console.log(i); // выводит "0", "1", "2", "foo"
// }
//
// for (let i of arr) {
//     console.log(i); // выводит "3", "5", "7"
// }



// 1
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

const obt = {};
let str = 'diner'
str.split('').forEach(s => {!obt[s]? obt[s]=1 : obt[s]+=1})
console.log(obt)


// 2
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// 3
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// 4
// let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
//
// 5
let arrTask = [-5, -4, -3, 2, 4, 8, 10, 15]
//k=5
//a + b = k

