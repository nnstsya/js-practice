const alertButton = document.querySelector('.alert-btn');
const squareButton = document.querySelector('.square-btn');
const numberInput = document.querySelector('.number-input');

alertButton.addEventListener('click', ()=> {
    alert('Hello! This is an alert message.');
});

squareButton.addEventListener('click', () => {
    const number = +numberInput.value;
    if (number) {
        alert(`The square of ${number} is ${number * number}`);
    } else {
        alert('Please enter a number.');
    }
});