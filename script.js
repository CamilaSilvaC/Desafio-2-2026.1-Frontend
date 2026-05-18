// Menu mobile 
const btnMenu    = document.getElementById('btn-menu')
const menuMobile = document.getElementById('menu-mobile')

btnMenu.addEventListener('click', function () {
  const aberto = menuMobile.classList.toggle('aberto')
  // Atualiza aria-expanded para leitores de tela saberem o estado
  btnMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false')
})

function fecharMenu() {
  menuMobile.classList.remove('aberto')
  btnMenu.setAttribute('aria-expanded', 'false')
}

// Dark / Light mode 
const btnTema   = document.getElementById('btn-tema')
const iconeLua  = document.getElementById('icone-lua')
const iconeSol  = document.getElementById('icone-sol')
const htmlEl    = document.documentElement

// Tema
function aplicarTema(tema) {
  if (tema === 'light') {
    htmlEl.classList.remove('dark')
    iconeLua.classList.remove('hidden')   //  lua - dark
    iconeSol.classList.add('hidden')
    btnTema.setAttribute('aria-label', 'Ativar modo escuro')
  } else {
    htmlEl.classList.add('dark')
    iconeSol.classList.remove('hidden')   //  sol - light
    iconeLua.classList.add('hidden')
    btnTema.setAttribute('aria-label', 'Ativar modo claro')
  }
  localStorage.setItem('tema', tema)
}


const temaSalvo = localStorage.getItem('tema') || 'light'
aplicarTema(temaSalvo)

btnTema.addEventListener('click', function () {
  const temaAtual = htmlEl.classList.contains('dark') ? 'dark' : 'light'
  aplicarTema(temaAtual === 'dark' ? 'light' : 'dark')
})