/* Змінна lang може набувати 2 значення: 'ua' 'en'.
Якщо вона має значення 'ru', то в змінну arr запишемо масив днів тижня українською мовою, а якщо має значення 'en' – англійською.
Розв'яжіть задачу через if і через switch-case. */

type langType = "ua" | "en";
const uaWeekdays = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];
const enWeekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

function test1(lang: langType) {
    const arr: string[] = [];

    if (lang === "ua") {
        arr.push(...uaWeekdays);
    } else {
        arr.push(...enWeekdays);
    }

    console.log(arr);
}

function test2(lang: langType) {
    const arr: string[] = [];

    switch(lang) {
    case "ua":
        arr.push(...uaWeekdays);
        break;
    case "en":
        arr.push(...enWeekdays);
    }

    console.log(arr);
}

test1('ua');
test1('en');

test2('ua');
test2('en');