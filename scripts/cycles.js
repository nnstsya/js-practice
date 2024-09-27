/* Потрібно написати функцію, що веде в консоль числа від 1 до n, де n - це ціле число,
яке функція приймає як параметр, з такими умовами:
виведення fizz замість чисел, кратних 3;
виведення buzz замість чисел, кратних 5;
виведення fizzbuzz замість чисел, кратних як 3, і 5. */
function logNumOrWord(n) {
    for (var i = 1; i <= n; i++) {
        var multipleOfThreeAndFive = !(i % 3 && i % 5);
        var multipleOfThree = !(i % 3);
        var multipleOfFive = !(i % 5);
        if (multipleOfThreeAndFive) {
            console.log('fizzbuzz');
        }
        else if (multipleOfThree) {
            console.log('fizz');
        }
        else if (multipleOfFive) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}
logNumOrWord(23);
/* Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
Голосними є "a", "e", "i", "o", "u". */
var vowels = ["a", "e", "i", "o", "u"];
function countVowelsInStr(str) {
    var numOfVowels = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var symbol = str_1[_i];
        if (vowels.includes(symbol)) {
            numOfVowels += 1;
        }
    }
    return numOfVowels;
}
console.log(countVowelsInStr('Today is a good day!'));
// Вивести на п'яти рядках # (у консолі) - на першій одні грати, на другій - дві і т.д.
var hashSign = "#";
function logHashSignPyramid() {
    for (var i = 1; i <= 5; i++) {
        console.log(hashSign.repeat(i));
    }
}
logHashSignPyramid();
/* Даний масив з елементами [1, 2, 3, 4, 5], але може бути інший масив
(точна довжина не відома).
За допомогою циклу for виведіть усі ці елементи на екран – це перше завдання.
І друге, іншим циклом порахувати суму всіх елементів у масиві. */
var arr1 = [1, 2, 3, 4, 5];
function logElementsOfArr(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        console.log(number);
    }
}
function calculateSumOfAllElements(arr) {
    var sumOfAllElements = arr[0];
    for (var i = 1; i < arr.length; i++) {
        sumOfAllElements += arr[i];
    }
    return sumOfAllElements;
}
function calculateSumAndLogElements(arr) {
    logElementsOfArr(arr);
    console.log(calculateSumOfAllElements(arr));
}
calculateSumAndLogElements(arr1);
