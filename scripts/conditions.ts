/* Змінна lang може набувати 2 значення: 'ua' 'en'.
Якщо вона має значення 'ru', то в змінну arr запишемо масив днів тижня українською мовою, а якщо має значення 'en' – англійською.
Розв'яжіть задачу через if і через switch-case. */

type langType = "ua" | "en";
const uaWeekdays: string[] = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
const enWeekdays: string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function test1(lang: langType): string[] {
    const arr: string[] = [];

    if (lang === "ua") {
        arr.push(...uaWeekdays);
        return arr;
    } else {
        arr.push(...enWeekdays);
        return arr;
    }
}

function test2(lang: langType): string[] {
    const arr: string[] = [];

    switch(lang) {
    case "ua":
        arr.push(...uaWeekdays);
        return arr;
    case "en":
        arr.push(...enWeekdays);
        return arr;
    }
}

function test3(lang: langType): string[] {
    const arr: string[] = [];

    lang === "ua" ? arr.push(...uaWeekdays) : arr.push(...enWeekdays);

    return arr;
}

console.log(test1('ua'));
console.log(test1('en'));

console.log(test2('ua'));
console.log(test2('en'));

console.log(test3('ua'));
console.log(test3('en'));