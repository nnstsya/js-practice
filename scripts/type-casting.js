// Які тут будуть значення?

console.log(Number("1234826516465498456458754n")) // NaN, 'n' вказує на те що число є типом BigInt і не є звичним для типу Number
console.log("" + 1 + 0) // "10", числа додаються до рядка
console.log(6 / "3") // 2, арифметичний знак перед рядком перетворює його на число
console.log(undefined + 1) // NaN, операції з undefined і числами призводять до NaN
console.log(" -9 " + 5) // " -9 5", число додається до рядка
console.log(" -9 " - 5) // -14, "-9" стає числом, пробіли ігнорується
console.log(4 + 5 + "px") // "9px", спочатку числа додаються, а потім перетворюються на рядок
console.log("$" + 4 + 5) // "$45", числа додаються до рядка
console.log(true + false) // 1, 1 + 0 = 1
console.log([1] > null) // true, null приводиться до нуля
console.log('foo' + + 'bar') // "fooNaN", рядок який не є числом перетворюється на NaN
console.log(!!"true" == !!"false") // true, не пустий рядок це true в будь-якому випадку
console.log(null == '') // false, null може бути рівним тільки undefined