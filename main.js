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
    navbarMenu.classList.remove('open');
    scrollIntoView(link1);
});

// Navbar toggle button for small screen
const navbarTogglebtn = document.querySelector('.navbar_toggle-btn');
navbarTogglebtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
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
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter ==null){
        return;
    }
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




// 1. 모든 섹션 요소들과 메뉴아이템들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다
const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#testimonials',
    '#contact',
  ];
  const sections = sectionIds.map(id => document.querySelector(id));
  const navItems = sectionIds.map(id =>
    document.querySelector(`[data-link="${id}"]`)
  );
  
  let selectedNavIndex = 0;
  let selectedNavItem = navItems[0];
  function selectNavItem(selected) {
    selectedNavItem.classList.remove('active');
    selectedNavItem = selected;
    selectedNavItem.classList.add('active');
  }
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  };
  
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && entry.intersectionRatio > 0) {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        // 스크롤링이 아래로 되어서 페이지가 올라옴
        if (entry.boundingClientRect.y < 0) {
          selectedNavIndex = index + 1;
        } else {
          selectedNavIndex = index - 1;
        }
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
  
