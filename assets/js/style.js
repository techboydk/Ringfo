$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $("body").toggleClass("fixed");
    })
})

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