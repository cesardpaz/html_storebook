const btnCart = document.querySelector('.header__main__shopping button');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__top');
const minicart = document.querySelector('.minicart');
btnCart.addEventListener('click', openMinicart);

function openMinicart () {
    minicart.classList.add('active');
    overlay.classList.add('active');
}


const bntToggle = document.querySelector('.menu_toggle');

bntToggle.addEventListener('click', () => {
    
    if(menu.classList.contains('on'))  {
        menu.classList.remove('on');
        overlay.classList.remove('active');
    } else {
        menu.classList.add('on');
        overlay.classList.add('active');
    }
});

overlay.addEventListener('click', () => {
    menu.classList.remove('on');
    overlay.classList.remove('active');
    minicart.classList.remove('active');
});

window.addEventListener('resize',(event) => {
    console.log('Scrolling...');
    menu.classList.remove('on');
    overlay.classList.remove('active');
    minicart.classList.remove('active');
});