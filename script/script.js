function turnDark() {
  const turner = document.querySelector('.information')
  turner.classList.toggle('darkmode')
  turner.innerHTML = 'You pressed it!'
  console.log('this is working')

  const visible = document.querySelectorAll('.invisi')
  for (let i = 0; i < visible.length; i++) {
    visible[i].classList.toggle('darkmode')
  }

  const headers = document.querySelectorAll('.toggler')
  for (let i = 0; i < headers.length; i++) {
    headers[i].classList.toggle('cantSee')
  }
}

document.getElementById('darkMode').onclick = turnDark
