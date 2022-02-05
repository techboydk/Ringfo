$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $("body").toggleClass("fixed");
    });

    $('i').click(function(){
        $(this).toggleClass('fa-pause-circle fa-play-circle');
        if($(this).hasClass('fa-pause-circle')){
            $(this).parent().find('audio')[0].play();
        }
        else{
            $(this).parent().find('audio')[0].pause();
        }  
    });
});


document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
}, true);

document.addEventListener('click', function(e){
    var icons = document.getElementsByClassName('playbutton');
    for(var i = 0, len = icons.length; i < len;i++){
        if(icons[i] != e.target){
            icons[i].classList.add('fa-play-circle');
            icons[i].classList.remove('fa-pause-circle');
        }
    }
}, true);

