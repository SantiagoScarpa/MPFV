const btnMenu = document.querySelector('#btnNav');
const navMenu = document.querySelector('#navbar-default')

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('collapse')
    navMenu.classList.toggle('h-0')
})

