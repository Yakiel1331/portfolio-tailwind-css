//Navbar Fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const Fixednav = header.offsetTop;

    if( window.pageYOffset > Fixednav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    };

}


// Hamburger

const NavMenu = document.querySelector('#nav-menu');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    NavMenu.classList.toggle('hidden');
})