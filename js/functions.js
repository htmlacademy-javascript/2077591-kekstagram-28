/*

имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 18); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 10); // Результат: false — строка не проходит
*/

function stringLength(string, len) {
  return string.length <= len;
}
stringLength();
/*

 проверка

const result1 = stringLength(string, 20);
console.log(result1);
const result2 = stringLength(string, 18);
console.log(result2);
const result3 = stringLength(string, 10);
console.log(result3);


другой способ

const checkLength = (string, length) => {
  if (string.length <= length); {
    return true;
  } else {
    return false;
  }
}
const res = checkLength('проверяемая строка', 20);
console.log(res);


*/

/*

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке!

// Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true

*/


const isPolindrome = (string) => {
  const tempString = string.toLocaleLowerCase().replaceAll(' ', '');

  let reversString = '';
  for (let i = tempString - 1; i >= 0; i--) {
    reversString += tempString.at(i);
  }
  //console.log(reversString);
  return tempString === reversString;
};
isPolindrome('топот');

/*

имяФункции('2023 год');            // 2023
имяФункции('ECMAScript 2022');     // 2022
имяФункции('1 кефир, 0.5 батона'); // 105
имяФункции('агент 007');           // 7
имяФункции('а я томат');           // NaN

*/

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at[i], 10))) {
      result += string.at[i];
    }
  }
  return parseInt(result, 10);
};

extractNumber();

/*

Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

Эта функция нам пригодится для формирования адресов файлов. Примеры её использования:

// Добавочный символ использован один раз
имяФункции('1', 2, '0');      // '01'

// Добавочный символ использован три раза
имяФункции('1', 4, '0');      // '0001'

// Добавочные символы обрезаны с конца
имяФункции('q', 4, 'werty');  // 'werq'

// Добавочные символы использованы полтора раза
имяФункции('q', 4, 'we');     // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
имяФункции('qwerty', 4, '0'); // 'qwerty'


*/

const myPadStart = (string, minLenght, pad) => {
  const actualPad = minLenght - string.length;

  if (actualPad <= 0) {
    return string;
  }

  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad
    / pad.length) + string;
};

myPadStart();
