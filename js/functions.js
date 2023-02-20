/*

имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 18); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 10); // Результат: false — строка не проходит

*/

let a = "проверяемая строка";
console.log (a.length);

function string_length(a, len) {
  return a.length <= len
}

const result1 = string_length(a, 20);
console.log (result1);
const result2 = string_length(a, 18);
console.log (result2);
const result3 = string_length(a, 10);
console.log (result3);



/*
имя_функции('топот'); // Результат: true - строка является палиндромом
имя_функции('ДовОд'); // Результат: true - несмотря на разный регистр, тоже палиндром
имя_функции('Кекс');  // Результат: false - это не палиндром
*/


/* ТОПОТ */


function reverseString(str) {
  // Шаг 1. Использую метод split(), чтобы получить массив из строки
  var splitString = str.split("");

  // Шаг 2. Использую метод reverse(), чтобы перевернуть элементы в полученном массиве
  var reverseArray = splitString.reverse();

  // Шаг 3. Использую метод join(), чтобы соединить элементы массива
  var joinArray = reverseArray.join("");

  // Шаг 4. Возвращаю перевернутую строку
  return joinArray; //
}

let topot = 'топот';

let topot_reverse = reverseString(topot);
console.log (topot_reverse);

function comparison1 (topot, topot_reverse) {
  return topot===topot_reverse
  };

let result_one = comparison1 (topot, topot_reverse);
console.log (result_one);





/* ДовОд */

function reverseString(str) {
  // Шаг 1. Использую метод split(), чтобы получить массив из строки
  var splitString = str.split("");

  // Шаг 2. Использую метод reverse(), чтобы перевернуть элементы в полученном массиве
  var reverseArray = splitString.reverse();

  // Шаг 3. Использую метод join(), чтобы соединить элементы массива
  var joinArray = reverseArray.join("");

  // Шаг 4. Возвращаю перевернутую строку
  return joinArray; //
}

let dovod = 'ДовОд';

let dovod_reverse = reverseString(dovod);
console.log (dovod);

function comparison2 (dovod, dovod_reverse) {
  return dovod.toLowerCase===dovod_reverse.toLowerCase
  };

let result_two = comparison2 (dovod, dovod_reverse);
console.log (result_two);






/* Кекс */

function reverseString(str) {
  // Шаг 1. Использую метод split(), чтобы получить массив из строки
  var splitString = str.split("");

  // Шаг 2. Использую метод reverse(), чтобы перевернуть элементы в полученном массиве
  var reverseArray = splitString.reverse();

  // Шаг 3. Использую метод join(), чтобы соединить элементы массива
  var joinArray = reverseArray.join("");

  // Шаг 4. Возвращаю перевернутую строку
  return joinArray; //
}

let keks = 'кекс';

let keks_reverse = reverseString(keks);
console.log (keks);

function comparison3 (keks, keks_reverse) {
  return keks===keks_reverse
  };

const result_three = comparison3 (keks, keks_reverse);
console.log (result_three);







/*
имя_функции('2023 год');            // Результат: число 2023
имя_функции('ECMAScript 2022');     // Результат: число 2022
имя_функции('1 кефир, 0.5 батона'); // Результат: число 105
имя_функции('а я томат');           // Результат: NaN

имя_функции(2023); // Результат: число 2023
имя_функции(-1);   // Результат: число 1
имя_функции(1.5);  // Результат: число 15

*/

console.log (parseInt('2023 год'));
console.log (parseInt('ECMAScript 2022'));
console.log (parseFloat('1 кефир, 0.5 батона'));
console.log (parseInt('а я томат'));


/*

// Добавочный символ использован один раз
имя_функции('1', 2, '0');      // Результат: строка '01'

// Добавочный символ использован три раза
имя_функции('1', 4, '0');      // Результат: строка '0001'

// Добавочные символы обрезаны с конца
имя_функции('q', 4, 'werty');  // Результат: строка 'werq'

// Добавочные символы использованы полтора раза
имя_функции('q', 4, 'we');     // Результат: строка 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имя_функции('qwerty', 4, '0'); // Результат: строка 'qwerty'

*/

