const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.links_mobile');
const heronav = document.querySelector('.heronav');
let menuOpen = false;

menuBtn.addEventListener('click' , () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        mobileMenu.classList.add('open');
        heronav.classList.add('overlay');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        heronav.classList.remove('overlay');
        menuOpen = false;
    }
});


