const botaoAbreSidebar = document.querySelector('.abrirSideBar')
const botaoFechaSidebar = document.querySelector('.fechaSideBar')
const sideBar = document.querySelector('.sideBar')


botaoAbreSidebar.addEventListener('click', () => {
  abreSideBar()
})

botaoFechaSidebar.addEventListener('click', () => {
  fechaSideBar()
})

function abreSideBar() {
  sideBar.classList.add('on')
}
function fechaSideBar() {
  sideBar.classList.remove('on')
}