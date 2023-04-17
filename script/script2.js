function darkTwo() {
  const boxer = document.querySelectorAll('.information')
  for (let i = 0; i < boxer.length; i++) {
    boxer[i].classList.toggle('darkmode')
    console.log(boxer[i])
  }
}

document.getElementById('dMode').onclick = darkTwo
