let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let toggle = document.getElementsByClassName('nav-links');
let home = document.getElementById('homeLink');
let about = document.getElementById('aboutLink');
let contact = document.getElementById('contactLink');
let signs = document.getElementById('signsLink');
let open = document.getElementById('open');
let close = document.getElementById('close');

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    open.classList.remove("showOpen");
    close.classList.toggle("showClose")
})

home.addEventListener("click", function() {
    mainNav.classList.remove("active");
    close.classList.remove("showClose");
})

about.addEventListener("click", function() {
    mainNav.classList.remove("active");
    close.classList.remove("showClose");
})

contact.addEventListener("click", function() {
    mainNav.classList.remove("active");
    close.classList.remove("showClose");
})

signs.addEventListener("click", function() {
    mainNav.classList.remove("active");
    close.classList.remove("showClose");
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = "0";
    } else {
        document.getElementById('navbar').style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}