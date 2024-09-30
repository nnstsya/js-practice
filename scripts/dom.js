const alertButton = document.querySelector('.alert-btn');
const squareButton = document.querySelector('.square-btn');
const numberInput = document.querySelector('.number-input');
const imageContainer = document.querySelector('.image-container');

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

const images = [
    {
        imageUrl: 'https://st.depositphotos.com/1899425/1623/i/600/depositphotos_16232649-stock-photo-moraine-lake-sunrise-colorful-landscape.jpg',
        title: 'Mountain Lake'
    },
    {
        imageUrl: 'https://st.depositphotos.com/1005145/2341/i/600/depositphotos_23418410-stock-photo-pink-flowers-in-the-mountains.jpg',
        title: 'Pink Sunrise'
    },
    {
        imageUrl: 'https://klike.net/uploads/posts/2019-01/1547365376_1.jpg',
        title: 'Sunset in the Mountains'
    },
    {
        imageUrl: 'https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg',
        title: 'River in the Mountains'
    },
    {
        imageUrl: 'https://7oom.ru/wp-content/uploads/peizaji-22.jpg',
        title: 'Evening in the Desert'
    }
];

images.forEach((img) => {
    const imgElement = document.createElement('img');
    imgElement.src = img.imageUrl;
    imgElement.alt = img.title;
    imgElement.className = 'image';

    imgElement.addEventListener('click', function() {
        const currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        imgElement.classList.add('active');
    });

    const titleElement = document.createElement('p');
    titleElement.textContent = img.title;

    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(titleElement);
});