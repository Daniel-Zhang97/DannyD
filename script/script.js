function turnDark() {
  document.getElementsByClassName('information').style.background-color = 'black';
  document.getElementsByClassName('information').style.color = 'white';
  document.getElementsByClassName('information').innerHTML = 'checkcehck'
}

document.getElementById('darkMode').onclick = turnDark
