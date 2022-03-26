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
    'img14.jpeg',
    'img15.jpeg',
    'img16.jpeg',
    'img9.jpg',
];

// active menu icon;
const sideMenu = document.querySelector('.side-menu');
const menuIcons = document.querySelectorAll('.menu-icon i');
const contents = document.querySelectorAll('.content');

menuIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        menuIcons.forEach((icon) => icon.classList.remove('active'));
        contents.forEach((content) => {
            content.style.display = 'none';
            logo.style.display = 'flex';
        });
        if (overlayLayer.classList.contains('open-overlay')) {
            overlayLayer.classList.remove('open-overlay');
            viewImageLayer.style.transform = 'scale(0)';
        }
        icon.classList.add('active');
        if (e.target.classList.contains('home-icon')) {
            const home = document.getElementById('home');
            home.style.display = 'flex';
            if (window.innerWidth < 480) {
                sideMenu.style.border = 'none';
            }
        } else if (e.target.classList.contains('gallery-icon')) {
            const gallery = document.getElementById('gallery');
            gallery.style.display = 'block';
            if (window.innerWidth < 480) {
                sideMenu.style.borderTop = '1px solid #4f546299';
            }
        } else {
            const wishes = document.getElementById('wishes');
            wishes.style.display = 'block';
            if (window.innerWidth < 480) {
                logo.style.display = 'none';
                sideMenu.style.borderTop = '1px solid #4f546299';
            }
        }
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
    box.classList.remove('animate-gift-box');
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

// cancel view image
viewImageLayer.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-img')) return;
    viewImageLayer.style.transform = 'scale(0)';
    overlayLayer.classList.remove('open-overlay');
});

//wishes collection
const wishes = [
    'Happy Birthday my angel. I wish I could write across the sky so that everyone could see it.',
    'The universe may turn upside down, but you will always be the prettiest girl in town. Happy birthday my love.',
    'I hope your birthday is as beautiful and full of love as you are.',
    'The moon and the stars are not enough to express my love for you. Have a wonderful birthday.',
    'You are the reason I smile every day. Our passion will never go away, and our love will shine brightest on this special day. ',
    'All our memories together will never be taken away, no matter how old we get and how many birthdays pass by, I will always be here for you. Happy birthday.',
    'You are very special and you deserve the best. I wish you a wonderful life filled with love and happiness. Happy Birthday.',
];

const wishesCollection = document.querySelector('.wishes-collection');
wishes.forEach((wish) => {
    wishesCollection.innerHTML += `
                    <div class="wish-card-container col-md-6 col-xl-4 mb-4">
                    <div class="wish-card">
                        <p class="m-0 wish-txt">${wish}</p>
                    </div>
                </div>`;
});
