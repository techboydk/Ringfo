//songname list
const songName = ['Aaj Waqt Tumra Hai - Rajkumar - Hindi Dialogue.mp3',
    'Arey Yaar Ek Aur Message Message - Funny.mp3',
    'Atrangi re-Rait Zara Si.mp3',
    'Badam Badam.mp3',
    'Bas Tum Mere Paas Raho - Instrumental Song.mp3',
    'Best Flute Ringtunes Bollywood Songs.mp3',
    'Bhojpuri Bewafa Shayari.mp3',
    'Bhojpuri Dj Mp3.mp3',
    'Bhojpuri Ghaghri.mp3',
    'Bhojpuri Kanhvagayil.mp3',
    'Chal Di Kudi - Harrdy Sandhu.mp3',
    'Chicken Bhojpuri.mp3',
    'Dil Ko Karaar Aaya - Siddharth Shukla.mp3',
    'Excuses Reverb Lofi.mp3',
    'Gori Tere Jiya Hor Na Koi Milya.mp3',
    'Gujar Na Jaye Ye Din - Hindi Song.mp3',
    'Helicopter Helicopter - CLC.mp3',
    'Holi Bhojpuri.mp3',
    'Hope Most Eligible Bachelor.mp3',
    'Hum unse mohabbat karke.mp3',
    'Jorthaale - Dhanush.mp3',
    'KGF Mass Attitude Hindi Dialogue.mp3',
    'KGF.mp3',
    'Krishna - Hindi Dialogue.mp3',
    'Latest bollywood songs.mp3',
    'Love Me Like you do.mp3',
    'Love Nwantiti - Remix.mp3',
    'Maa o meri maa.mp3',
    'Manadhoram Oru Kaayam - Mudhal Nee Mudivum Nee ! Sid Sriram ! Tamil Song.mp3',
    'Meri Maa Ke Barabar Kohi Nahi - Jubin Nautiyal ! Devotional ! Hindi.mp3',
    'Money heist.mp3',
    'Nana Patekar Best Dialogue.mp3',
    'Pachhataoge flute BGM.mp3',
    'Pirates BGM - Hollywood BGM.mp3',
    'Popular English Songs.mp3',
    'Pushpa ! Dialogue ! Hindi ! Allu Arjun.mp3',
    'Pushpa First Song Bgm.mp3',
    'Radha Krishna - Flute.mp3',
    'Radhe Radhe Radhe Bol.mp3',
    'Rajkumar ! Dialogue.mp3',
    'Rajkumar dialogue.mp3',
    'Romantic.mp3',
    'Saiyaara - Instrumental.mp3',
    'Sajaunga Lut Kar Bhi Teri Badan Ki Dali Ko - Remix.mp3',
    'Sajda Tera Kar Naa Sakun Vo Bandagi Kya Bandagi-Raabta.mp3',
    'Sia Unstoppable.mp3',
    'Sigma Rule - Akuran Remix.mp3',
    'Snehithane Snehithane - Remix.mp3',
    'Suna Hai Teri Taqdeeron Mein - Female Version ! Sad ! Hindi.mp3',
    'Taal.mp3',
    'The Villagers - Sumit Goswami.mp3',
    'Tu Antaryami Sabka Swami.mp3',
    'Tu Mile Dil Khile - Flute.mp3',
    'Tumse Pyaar Karke - Tulsi Kumar ! Hindi Song.mp3',
    'Valentine day special mashup.mp3',
    'khusabu se teri mahake .mp3',
    'mehafil me teri ham na rhe jo.mp3',
    'new bollywood songs 2019.mp3'
];

function createElement(name, classList) {
    const element = document.createElement(name);
    element.classList = classList;
    return element;
}

//creating html element for song container
function createCard(songname, url) {
    const div1 = createElement('div', 'card');
    const div2 = createElement('div', 'inner-width');
    const div3 = createElement('div', 'tittle');
    const div4 = createElement('div', 'download');
    const div5 = createElement('span', 'time');
    const audio = createElement('audio', 'audio');
    const icon1 = createElement('i', 'fa fa-play-circle playbutton');
    const h41 = createElement('h4', '');
    const icon2 = createElement('i', 'fas fa-download');
    const download = createElement('a', 'link');
    audio.src = "https://techboydk.github.io/Ringfo-lib/ringtones/" + url;
    download.href = "https://github.com/techboydk/Ringfo-lib/blob/main/ringtones/" + url + "?raw=true";
    h41.innerHTML = songname.replace('.mp3', ' ');
    div1.appendChild(div2);
    div2.appendChild(audio);
    div2.appendChild(div3);
    div2.appendChild(icon1);
    div2.appendChild(div5);
    div2.appendChild(div4);

    div3.appendChild(h41);
    div4.appendChild(download);
    download.appendChild(icon2);
    const section = document.getElementById("home");
    section.appendChild(div1);

    //show time

    function getDuration(src, destination) {
        var audio = new Audio();
        $(audio).on("loadedmetadata", function() {
            let time = Math.floor(audio.duration);
            console.log(time);
            destination.textContent = time + " sec";
        });
        audio.src = src;
    }
    getDuration(audio.src, div5)
}



function displayRingtone() {
    RingtoneNameList = songName;
    let lenght = RingtoneNameList.length;
    let songname = '';
    for (var i = 0; i < lenght; i++) {
        let toneName = RingtoneNameList[i].split(" ");
        const size = toneName.length;
        for (var j = 0; j < size; j++) {
            if (j < 3) {
                if (toneName[j] == '-') {
                    continue;
                } else {
                    songname += toneName[j] + " ";
                }
            }
        }
        createCard(songname, RingtoneNameList[i]);
        songname = '';
    }
}

//calling of display function to append all  creating  element
displayRingtone();



//toggle navbar
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
        $("body").toggleClass("fixed");
    });


    $('.playbutton').click(function() {
        $(this).toggleClass('fa-dharmachakra fa-play-circle');
        if ($(this).hasClass('fa-dharmachakra')) {
            $(this).parent().find('audio')[0].play();
        } else {
            $(this).parent().find('audio')[0].pause();
        }
        var audios = $(this).parent().find('audio')[0];
        var t = setInterval(function() {
            if (audios.currentTime == audios.duration) {
                $('.playbutton').addClass('fa-play-circle');
                $('.playbutton').removeClass('fa-dharmachakra');
                clearInterval(t);
            }
        }, 1);
    });
});

//time show 

//pause audio when another play  icon change pause to play
document.addEventListener('play', function(e) {
    var audios = document.getElementsByTagName('audio');
    var icons = document.getElementsByClassName('playbutton');

    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
            icons[i]
            audios[i].currentTime = 0;
            icons[i].classList.add('fa-play-circle');
            icons[i].classList.remove('fa-dharmachakra');
        }
    }
}, true);


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
