let images = [];
let time = 3000;
let i = 0;
images[0] = "https://aem.dropbox.com/cms/content/dam/dropbox/blog/files/2019/11/guido_hero.jpg";
images[1] =
    "https://pbs.twimg.com/media/EtEPkZxXMAAIeCw.jpg";
images[2] = "https://live.staticflickr.com/8525/8564955009_b2bb0cd5ba_c.jpg"
images[3] = "https://www.edivaldobrito.com.br/wp-content/uploads/2020/11/guido-van-rossum-anunciou-que-ira-trabalhar-na-microsoft.jpg"


function changeImg() {
    document.slider.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;

/*this is for the menu page */
let menu2 = document.getElementById("nav-id");

function OpenMenuPage() {
    let josh;
    if (josh == true) {
        menu2.style.top = "-5000px";
    } else {
        menu2.style.top = "00%";
    }
}

function CloseMenuPage() {
    let funs;
    if (funs == true) {
        menu2.style.top = "0";
    } else {
        menu2.style.top = "-5000px";
    }
}
let jo = document.getElementById("low-card");
let rough = document.getElementById("up");
let gange = document.getElementById("down");

function nice() {
    let m;
    if (m == true) {
        jo.style.display = "none";
        rough.style.display = "none";
        gange.style.display = "block";
    } else {
        jo.style.display = "flex";
        rough.style.display = "block";
        gange.style.display = "none";
    }
}

function Notnice() {
    let n;
    if (n == true) {
        jo.style.display = "flex";
        rough.style.display = "block";
        gange.style.display = "none";
    } else {
        jo.style.display = "none";
        rough.style.display = "none";
        gange.style.display = "block";
    }
}







/*-------------------------------------------------------------this is for the contact page-------------------------------------------------------------------------------------------------------------------------------------*/
let founder = document.getElementById("contact-page")

function OpenContactPage() {
    let b;
    if (b == true) {
        founder.style.top = "-5000px"
    } else {
        founder.style.top = "0px"
    }
}

function CloseContactPage() {
    let a;
    if (a == true) {
        founder.style.top = "000px"
    } else {
        founder.style.top = "-5000px"
    }
}