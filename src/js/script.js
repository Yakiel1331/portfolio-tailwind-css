//Navbar Fixed

function handlescroll(){
    const header = document.querySelector('header');
    const Fixednav = header.offsetTop;
    const ToTop = document.querySelector('#to-top');

    if( window.scrollY > Fixednav){
        header.classList.add('navbar-fixed');
        ToTop.classList.remove('hidden');
        ToTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        ToTop.classList.remove('flex');
        ToTop.classList.add('hidden');
        
    };

}


window.onscroll = handlescroll; 
window.onload = handlescroll;




// Hamburger

const NavMenu = document.querySelector('#nav-menu');
const hamburger = document.querySelector('#hamburger');
const DarkModeToggle = document.querySelector('#dark-toggle')

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
})

//Klik dilluar Hamburger

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != NavMenu && e.target != DarkModeToggle){
        hamburger.classList.remove('hamburger-active');
        NavMenu.classList.add('hidden');
    };
});

//Darkmode toggle

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

    if(html.classList.contains('dark')){
        darkToggle.checked = true;
    }else{
        darkToggle.checked = false;
    }

darkToggle.addEventListener('click', function(){

    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});
