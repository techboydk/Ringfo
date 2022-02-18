//toggle navbar function
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $("body").toggleClass("fixed");
    });
});



const imgnameList = ['Allu Arjun.jpg',
    'Hanuman - black background.jpg',
    'Lotus Flower ! Light Pink Lotus.jpg',
    'Lotus Flower ! Pink ! Lotus ! Flower.jpg',
    'Moon Light ! Heaven.jpg',
    'Nature ! beautiful ! Nature Beautiful.jpg',
    'Nature HD.jpg',
    'Pushpa1.jpg',
    'Puspha.jpg',
    'Saraswati Maa ! Lord Saraswati Maa.jpg',
    'Thor ! Thunder God.jpg',
    'Yellow Flower.jpg',
    'Yellow Light.jpg',
    'ludo.jpg'
];
//creating html element for wallpaper displaying
function createElement(name, classList) {
    const element = document.createElement(name);
    element.classList = classList;
    return element;
    console.log(element);
}

function createCard(imgname) {
    const div1 = createElement('div', 'card');
    const div2 = createElement('div', 'download');
    const a1 = createElement('a', 'view');
    const a2 = createElement('a', 'item');
    const span = createElement('span', '');
    const img = createElement('img', '');
    a1.href = "https://raw.githubusercontent.com/techboydk/Ringfo-lib/main/wallpapers/" + imgname;
    a1.target = "_blank";
    a2.href = "https://raw.githubusercontent.com/techboydk/Ringfo-lib/main/wallpapers/" + imgname;
    a2.download = imgname;
    img.alt = imgname;
    img.src = "https://raw.githubusercontent.com/techboydk/Ringfo-lib/main/wallpapers/" + imgname;
    span.innerHTML = "Download";
    const section = document.getElementById("main");
    section.appendChild(div1);
    div1.appendChild(a1);
    div1.appendChild(a2);
    a1.appendChild(img);
    a2.appendChild(div2);
    div2.appendChild(span);
}

function displayimg() {

    let length = imgnameList.length;
    for (var i = 0; i < length; i++) {
        createCard(imgnameList[i]);
    }
}
//calling fuction
displayimg();

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}