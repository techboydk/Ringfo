$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $("body").toggleClass("fixed")
    })
})