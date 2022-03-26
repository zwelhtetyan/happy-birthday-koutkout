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
    'img12.jpeg',
    'img13.jpeg',
    'img10.jpeg',
    'img11.jpeg',
    'img8.jpeg',
    'img9.jpg',
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

//handle click on box
box.addEventListener('click', () => {
    if (box.classList.contains('open-box')) return;
    box.src = './assets/gift-cake1.png';
    box.classList.add('open-box');
    giftTxt.innerHTML =
        'This cake is for you <span style="font-style: normal;">🤍</span>';
    giftTxt.classList.remove('animate-active');
    giftTxt.style.opacity = '0';
    giftTxt.style.color = '#3adfc1';
    animateLayer.style.display = 'block';
    setTimeout(() => {
        animateLayer.classList.add('animate-layer-off');
    }, 300);
    setTimeout(() => {
        giftTxt.style.opacity = '1';
        giftTxt.classList.add('animate__animated', 'animate__shakeX');
        giftTxt.style.animationDelay = '.5s';
    }, 1300);
});

//back arrow
const backArrow = document.querySelector('.back-arrow');
backArrow.addEventListener('click', () => {
    giftContainer.style.display = 'none';
});

//display images
const imgCollection = document.querySelector('.img-collection');
const imagesToShow = images
    .map((img, idx) => {
        return `<div class="img-container mb-4">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="./gallery/${img}" alt="" class='kout-img' id="${idx}">
                </div>
                </div>`;
    })
    .join('');

imgCollection.innerHTML = imagesToShow;

//view image
const koutImg = document.querySelectorAll('.kout-img');
const viewImageLayer = document.querySelector('.view-img-layer');
const overlayLayer = document.querySelector('.overlay-layer');
const viewImage = document.querySelector('.view-img');

koutImg.forEach((img) => {
    img.addEventListener('click', (e) => {
        const id = e.currentTarget.id;
        viewImage.src = `./gallery/${images[id]}`;
        viewImageLayer.style.transform = 'scale(1)';
        overlayLayer.classList.add('open-overlay');
    });
});
