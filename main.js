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
    scrollIntoView(link1);
});

// Handle click on "contact me" button on home
const contactMenu = document.querySelector('.home_contact');
contactMenu.addEventListener('click',() =>{
    scrollIntoView('#contact');
});


// Make home slowly fade to transparent as the widdow scrolls down
const home = document.querySelector(".home_container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    home.style.opacity = 1-window.scrollY / homeHeight;
})



// show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button

arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});

// Projects

const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.Project');
workBtnContainer.addEventListener('click', e => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter ==null){
        return;
    }

// Remove selection from the previous item and select the new one

const active = document.querySelector('.category_btn.selected')
;
active.classList.remove('selected');
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
target.classList.add('selected');

    projectContainer.classList.add('anim-out');   
    setTimeout(() => {
        projects.forEach((Project)=>{
            console.log(Project.dataset.type);
            if(filter ==='*' || filter === Project.dataset.type){
                Project.classList.remove('invisible');
            }else{
                Project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}