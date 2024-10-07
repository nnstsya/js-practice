const imageContainer = document.querySelector('.image-container');

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
        imageUrl: 'https://klike.net/uploads/posts/2023-01/1674541972_2-4.jpg',
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
    const figureElement = document.createElement('figure');
    const imgElement = document.createElement('img');
    imgElement.src = img.imageUrl;
    imgElement.alt = img.title;
    imgElement.className = 'image';

    imgElement.addEventListener('click', ()=>  {
        const currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.parentElement.style.width = '100px';
            currentActive.classList.remove('active');
        }
        imgElement.classList.add('active');
        imgElement.parentElement.style.width = imgElement.width + 'px';
    });

    const figCaptionElement = document.createElement('figcaption');
    figCaptionElement.textContent = img.title;

    imageContainer.appendChild(figureElement);
    figureElement.appendChild(imgElement);
    figureElement.appendChild(figCaptionElement);
});

const firstImage = imageContainer.firstElementChild.firstElementChild;

firstImage.className = 'image active';