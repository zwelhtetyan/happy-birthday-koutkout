//preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').remove();
});

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

// active menu icon;
const menuIcons = document.querySelectorAll('.menu-icon i');

menuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        menuIcons.forEach((icon) => icon.classList.remove('active'));
        icon.classList.add('active');
    });
});

//logo
const giftContainer = document.querySelector('.gift-container');

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => (giftContainer.style.display = 'flex'));

//open the box
const box = document.querySelector('.gift-box');
const giftTxt = document.querySelector('.gift-txt');
const animateLayer = document.querySelector('.animate-layer');

box.addEventListener('click', () => {
    box.src = './assets/gift-cake1.png';
    giftTxt.innerHTML =
        'This cake is for you <span style="font-style: normal;">🤍</span>';
    giftTxt.classList.remove('animate-active');
    giftTxt.style.opacity = '0';
    setTimeout(() => {
        giftTxt.style.opacity = '1';
        giftTxt.classList.add('animate__animated', 'animate__shakeX');
        giftTxt.style.animationDelay = '.5s';
    }, 1300);
    giftTxt.style.color = '#3adfc1';
    animateLayer.style.display = 'block';
    setTimeout(() => {
        animateLayer.classList.add('animate-layer-off');
    }, 300);
});

//back arrow
const backArrow = document.querySelector('.back-arrow');
backArrow.addEventListener('click', () => {
    giftContainer.style.display = 'none';
});
