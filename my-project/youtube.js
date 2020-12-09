const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

const toggleBtn = document.querySelector('.header_toggleBtn');
const menu = document.querySelector('.header_menu');

toggleBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
});