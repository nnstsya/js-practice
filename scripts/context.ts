/* Чому отримуємо результат undefined? І що потрібно зробити, щоб отримати ім'я? */

const dog = {
    name: 'Guffi',
    sayName() {
        console.log(this.name);
    },
};
const sayName = dog.sayName;

sayName();

//тому що метод не має контексту, для того, щоб його підв'язати можна використати метод call:
sayName.call(dog);


/* Додайте в останній рядок метод call() так, щоб на екран вивелося value інпуту, що лежить у змінній elem. */

var elem = document.getElementById('elem');

function func() {
    alert(this.value);
}

func.call(elem); // тут має вивести value інпуту


/* Додайте в останній рядок метод call() так, щоб на екран вивелося 'привіт, Іванов Іван'.
Слово 'привіт' має взятися з value інпуту, а 'Іванів' та 'Іван' повинні бути параметрами функціями.
*/

function func1(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

func1.call(elem, 'Іванов', 'Йван'); // тут має вивести 'привіт, Іванов Іван'


/* Переробіть рішення попередньої задачі так, щоб місце методу call() був метод apply(). */

func1.apply(elem, ['Іванов', 'Йван']);


/* Напишіть у вказаному місці конструкцію з методом bind() так, щоб this всередині функції func завжди вказував на інпут зі змінної elem. */

function func2(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

const boundFunc = func2.bind(elem);

//Тут напишіть конструкцію с bind()
boundFunc('Іванов', 'Іван');
boundFunc('Петров', 'Петр');