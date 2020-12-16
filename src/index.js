const navBarBtnToggle = document.querySelector('#navbar-btn-menu-toggle')
const navBarToggle = document.querySelector('#navbar-menu-toggle')
if (navBarBtnToggle) {
  navBarBtnToggle.addEventListener('click', () => {
    if (navBarToggle.classList.contains('hidden')) {
      navBarToggle.classList.add('hidden')
    } else {
      navBarToggle.classList.remove('hidden')
    }
  })
}
