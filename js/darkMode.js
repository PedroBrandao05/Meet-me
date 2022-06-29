'use strict'

const componentes = document.querySelectorAll('.componente')

const botaoAtivaModo = componentes[3]

botaoAtivaModo.addEventListener('click', () => {
  ativaDarkMode()
})

function ativaDarkMode() {
  for (let i = 0; i < componentes.length; i++) {
    componentes[i].classList.toggle('darkMode')
  }
  if (botaoAtivaModo.classList.contains('darkMode')) {
    botaoAtivaModo.innerHTML = 'Ativar modo: Claro'
  } else {
    botaoAtivaModo.innerHTML = 'Ativar modo: Escuro'
  }
}

console.log(componentes)
