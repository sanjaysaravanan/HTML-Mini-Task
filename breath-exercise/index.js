const playBtn = document.getElementById('play');
const board = document.getElementById('board');
const txtArea = document.getElementById('txt-area');

function play() {
  board.classList.toggle('play');
  txtArea.classList.toggle('txt')
  playBtn.style.display = 'none';
}

