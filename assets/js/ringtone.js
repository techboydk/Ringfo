$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $("body").toggleClass("fixed");
    })
})

function play_pause(icon_id, audio_id){
    var icon_class = document.getElementById(icon_id);
    var myaudio = document.getElementById(audio_id);
    if(icon_class.classList.contains('fa-pause-circle')){
        document.getElementById(icon_id).classList.remove("fa-pause-circle");
        document.getElementById(icon_id).classList.add("fa-play-circle");
        myaudio.pause();
    }
    else{
        document.getElementById(icon_id).classList.remove("fa-play-circle");
        document.getElementById(icon_id).classList.add("fa-pause-circle");
        myaudio.play();
    }

    function pause_icon(){
        var y = document.getElementById(audio_id).currentTime;
        var x = document.getElementById(audio_id).duration;
        if (x ==y){
            document.getElementById(icon_id).classList.remove("fa-pause-circle");
            document.getElementById(icon_id).classList.add("fa-play-circle");
            clearInterval(t);
        }
    }
    var t=setInterval(pause_icon, 1);
}

function play_pause1(){
    play_pause("icon1", "audio1");
}

function play_pause2(){
    
    play_pause("icon2", "audio2");
}

function play_pause3(){
    play_pause("icon3", "audio3");
}

function play_pause4(){
    play_pause("icon4", "audio4");
}

function play_pause5(){
    play_pause("icon5", "audio5");
}

