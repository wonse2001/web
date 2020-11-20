'use strict';



// make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

// Handle srolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click',(event) =>{
    const target1 = event.target;
    const link1 = target1.dataset.link;
    if(link1 == null){
        return;
    }
    srollIntoView(link1);
});

// Handle click on "contact me" button on home
const contactMenu = document.querySelector('.home_contact');
contactMenu.addEventListener('click',() =>{
    srollIntoView('#contact');
});



function srollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}