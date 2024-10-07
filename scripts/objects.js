/* Чому замість hey amy отримуємо результат hey arnold? Що потрібно робити для отримання очікуваного результату? */

const greet = (person) => {
    if (person === { name: 'amy' }) {
        return 'hey amy';
    }
    return 'hey arnold';
};
greet({ name: 'amy' });

// тому що порівнюються посилання на обʼєкти, а не самі обʼєкти, в даному випадку потрібно порівняти саме значення властивостей, тобто:

const greet2 = (person) => {
    if (person.name === "amy" ) {
        return 'hey amy';
    }
    return 'hey arnold';
};
greet2({ name: 'amy' });
