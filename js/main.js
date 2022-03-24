const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img6.jpeg',
    'img7.jpeg',
    'img8.jpeg',
    'img9.jpg',
    'img10.jpeg',
    'img11.jpeg',
    'img12.jpeg',
    'img13.jpeg',
    'img14.jpeg',
    'img15.jpeg',
    'img16.jpeg',
];

const imgContainer = document.querySelector('#img-container');

// active menu icon;
const menuIcons = document.querySelectorAll('.menu-icon i');

menuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        menuIcons.forEach((icon) => icon.classList.remove('active'));
        icon.classList.add('active');
    });
});
