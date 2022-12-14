const menuBtn = document.querySelector('.hamburger');
const menuWrap = document.querySelector('.menu_wrap');
const mobileMenu = document.querySelector('.links_mobile');
const overlay = document.querySelector('.overlay');
const menuItem = document.querySelectorAll('.menu_item');
let menuOpen = false;

menuBtn.addEventListener('click' , () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        mobileMenu.classList.add('open');
        menuWrap.classList.add('open');
        overlay.classList.add('open');
        menuOpen = true;
    }
    else {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('open');
        overlay.classList.remove('open');
        menuWrap.classList.remove('open');
        menuOpen = false;
    }
});

for (var i = 0; i < menuItem.length; i++) {

    menuItem[i].addEventListener('click' , () => {
    
            menuBtn.classList.remove('open');
            mobileMenu.classList.remove('open');
            overlay.classList.remove('open');
            menuWrap.classList.remove('open');
            
        
    });

}
