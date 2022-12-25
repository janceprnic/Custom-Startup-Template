//variable for the burger menu icon
let burger_menu = document.querySelector('.burger-menu');

//variable for navigation links
let nav_links = document.querySelector('.nav-links');

//function which opens the menu on mobile devices and transforms the burger menu into a "X" button after clicking on it
burger_menu.addEventListener('click', function() {
    nav_links.classList.toggle('nav-links-active');

    burger_menu.classList.toggle('clicked');
})

//function which closes the menu after clicking the navigation links
nav_links.addEventListener('click', function() {
    nav_links.classList.toggle('nav-links-active');

    burger_menu.classList.toggle('clicked');
})

//function which changes the color of the navigation menu after scrolling for 125px
function change_bg() {
    let navbar = document.querySelector('.main-nav');

    let scroll_value = window.scrollY;

    if(scroll_value < 125) {
        navbar.classList.remove('main-nav-color');
    }
    else {
        navbar.classList.add('main-nav-color');
    }
}

window.addEventListener('scroll', change_bg);

//variable for "go up" button
let goup_btn = document.querySelector('.goup-btn');

//function for that makes the "go up" button appear
window.onscroll = function() {goup_btn_appearance()};

function goup_btn_appearance() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goup_btn.style.display = "block";
    }
    else {
        goup_btn.style.display = "none";
    }
}

//variables for answers in the "FAQ" section
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');

//variables for "X buttons" in the "FAQ" section
let x_btn1 = document.getElementById('x-btn1');
let x_btn2 = document.getElementById('x-btn2');
let x_btn3 = document.getElementById('x-btn3');

//functions that are used for opening the questions and removing the previously opened ones after clicking on another one
function toggle_a1() {
    if (a1.style.display === "none") {

        a1.style.display = "block";
        x_btn1.style.display = "block";

        a2.style.display = "none";
        a3.style.display = "none";

        x_btn2.style.display = "none";
        x_btn3.style.display = "none";
    }
    else {
        a1.style.display = "none";
        x_btn1.style.display = "none";
    }
}

toggle_a1();

function toggle_a2() {
    if (a2.style.display === "none") {
        
        a2.style.display = "block";
        x_btn2.style.display = "block";

        a1.style.display = "none";
        a3.style.display = "none";

        x_btn1.style.display = "none";
        x_btn3.style.display = "none";
    }
    else {
        a2.style.display = "none";
        x_btn2.style.display = "none";
    }
}

toggle_a2();

function toggle_a3() {
    if (a3.style.display === "none") {

        a3.style.display = "block";
        x_btn3.style.display = "block";

        a1.style.display = "none";
        a2.style.display = "none";

        x_btn1.style.display = "none";
        x_btn2.style.display = "none";
    }
    else {
        a3.style.display = "none";
        x_btn3.style.display = "none";
    }
}

toggle_a3();

//events that are used for closing the question after clicking the "X" button
x_btn1.addEventListener('click', function() {
    a1.style.display = "none";

    x_btn1.style.display = "none";
})

x_btn2.addEventListener('click', function() {
    a2.style.display = "none";

    x_btn2.style.display = "none";
})

x_btn3.addEventListener('click', function() {
    a3.style.display = "none";

    x_btn3.style.display = "none";
})