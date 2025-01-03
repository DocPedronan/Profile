var bg_colors = {
    custom1 : { light: "#FFFFFF", dark: "#12372A"},
    // custom1 : { light: "#436850", dark: "#12372A"},
    // custom2 : { light: "#474F7A", dark: "#1F2544"},
    // custom3 : { light: "#40679E", dark: "#1B3C73"},
    // custom4 : { light: "#2D9596", dark: "#265073"},
    // custom5 : { light: "#214584", dark: "#320c4e"},
    // custom6 : { light: "#FC6736", dark: "#0C2D57"},
    // custom7 : { light: "#59B4C3", dark: "#211C6A"},
    // custom8 : { light: "#944E63", dark: "#066853"},
    // custom9 : { light: "#B19470", dark: "#43766C"},
}

function getRandomGradient()
{
    let random_bg = Math.floor(Math.random() * Object.keys(bg_colors).length)

    bg_color_light = Object.values(bg_colors)[random_bg].light;
    bg_color_dark = Object.values(bg_colors)[random_bg].dark;

    return "linear-gradient(180deg, "+ Object.values(bg_colors)[random_bg].light +" 30%, "+ Object.values(bg_colors)[random_bg].dark +" 100%)"
}

function setBgColor()
{
    let random_gradient = getRandomGradient();
    this.document.querySelector(".container").style.background = random_gradient;
    // this.document.querySelector(".contact").style.background = bg_color_light;
    // this.document.getElementsByTagName('body')[0].style.background = bg_color_dark;

}

window.addEventListener("DOMContentLoaded", function() {   
    setBgColor();
    // imageCarousel('.image-item', '.img-btn-prev', '.img-btn-next');
}); 

function redirectToMessenger() {
    window.location.href = "https://m.me/ptrrms25";
}

window.addEventListener('scroll', function() {
    let num = this.window.scrollY / this.window.innerHeight;

    // fadeTextImage(num);
    // displayNav(num);

    // this.document.getElementById('ctr-text').innerHTML = "Counter : " + num;


    const navbar = this.document.getElementById("navbar");
    let navbarItems =  this.document.querySelectorAll('#nav-item');

    const scrollY = window.scrollY; 
    const opacity = Math.min(scrollY / 500, 1); 
    navbar.style.backgroundColor = `rgba(18, 55, 42, ${opacity})`;

    if (opacity > 0) {
        navbarItems.forEach((item) => item.style.color = 'white'); 
    } else {
        navbarItems.forEach((item) => item.style.color = 'black'); 
    }

    this.document.getElementById("intro-title").style.scale = num + 1;
})