/* Потрібно написати функцію, що веде в консоль числа від 1 до n, де n - це ціле число,
яке функція приймає як параметр, з такими умовами:
виведення fizz замість чисел, кратних 3;
виведення buzz замість чисел, кратних 5;
виведення fizzbuzz замість чисел, кратних як 3, і 5. */

function logNumOrWord(n: number): void {
    for (let i = 1; i <= n; i++) {

        const multipleOfThreeAndFive: boolean = !(i % 3 && i % 5);
        const multipleOfThree: boolean = !(i % 3);
        const multipleOfFive: boolean = !(i % 5);

        if (multipleOfThreeAndFive) {
            console.log('fizzbuzz');
        } else if (multipleOfThree) {
            console.log('fizz');
        } else if (multipleOfFive) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

logNumOrWord(23);

/* Потрібно написати функцію, яка приймає рядок як аргумент і повертає кількість голосних, які містяться в рядку.
Голосними є "a", "e", "i", "o", "u". */

const vowels: string[] = ["a", "e", "i", "o", "u"];

function countVowelsInStr(str: string): number {
    let numOfVowels: number = 0;

    for (let symbol of str) {
        if(vowels.includes(symbol)) {
            numOfVowels += 1;
        }
    }

    return numOfVowels;
}

console.log(countVowelsInStr('Today is a good day!'))

// Вивести на п'яти рядках # (у консолі) - на першій одні грати, на другій - дві і т.д.

const hashSign: string = "#";

function logHashSignPyramid(): void {
    for (let i = 1; i <= 5; i++) {
        console.log(hashSign.repeat(i));
    }
}

logHashSignPyramid();

/* Даний масив з елементами [1, 2, 3, 4, 5], але може бути інший масив
(точна довжина не відома).
За допомогою циклу for виведіть усі ці елементи на екран – це перше завдання.
І друге, іншим циклом порахувати суму всіх елементів у масиві. */

const arr1: number[] = [1, 2, 3, 4, 5];

function logElementsOfArr(arr: number[]): void {
    for (let number of arr) {
        console.log(number);
    }
}

function calculateSumOfAllElements(arr: number[]): number {
    let sumOfAllElements: number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        sumOfAllElements += arr[i];
    }

    return sumOfAllElements;
}

function calculateSumAndLogElements(arr: number[]): void {
    logElementsOfArr(arr);
    console.log(calculateSumOfAllElements(arr));
}

calculateSumAndLogElements(arr1);