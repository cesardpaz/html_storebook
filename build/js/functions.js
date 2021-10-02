const btnCart = document.querySelector('.header__main__shopping button');

btnCart.addEventListener('click', openMinicart);

function openMinicart () {
    document.querySelector('.minicart').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}