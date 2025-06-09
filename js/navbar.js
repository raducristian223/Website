const navbarList = document.getElementById('navbarList')
const navbarBurger = document.getElementById('navbarBurger')

navbarBurger.addEventListener('click', () => {
  navbarList.classList.toggle('navbar-list-show')
})