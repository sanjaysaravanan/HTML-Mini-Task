const circle = `<div class="item html">
<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
<g>
  <circle class="circle_animation" r="69.85699" cy="81" cx="81" stroke-width="15" stroke="#f2ebd3" fill="none"/>
</g>
</svg>
</div>`;

const cross = `<div class="item html">
<svg width="160" height="160" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
<g>
  <line class="circle_animation" stroke="#545454" stroke-width="15"  x1="10" y1="150" x2="150" y2="10"/>
  <line class="circle_animation" stroke="#545454" stroke-width="15" x1="10" y1="10" x2="150" y2="150"/>
</g>
</svg>
</div>`;

const moves = [];
const moves2D = [[], [], []];

const checkWining = () => undefined;

const winnnerLine = document.getElementById('winner-line');
const result = document.getElementById('result');
const board = document.getElementById('board');

let winner = '';
let winnerSegment = 'cross-one'; 

// winner-axis x-axis winner-axis-o x-segment-three
// winner-axis y-axis winner-y-axis winner-axis-x y-segment-three

const checkWin = () => {
  switch(winnerSegment) {
    case 'hoz-one':
      winnnerLine.classList.add('x-axis', 'winner-x-axis', 'x-segment-one');
      break;
    case 'hoz-two':
      winnnerLine.classList.add('x-axis', 'winner-x-axis', 'x-segment-two');
      break;
    case 'hoz-three':
      winnnerLine.classList.add('x-axis', 'winner-x-axis', 'x-segment-three');
      break;
    case 'ver-one':
      winnnerLine.classList.add('y-axis', 'winner-y-axis', 'y-segment-one');
      break;
    case 'ver-two':
      winnnerLine.classList.add('y-axis', 'winner-y-axis', 'y-segment-two');
      break;
    case 'ver-three':
      winnnerLine.classList.add('y-axis', 'winner-y-axis', 'y-segment-three');
      break;
    case 'cross-two':
      winnnerLine.classList.add('y-axis', 'winner-cross-two', 'cross-two');
      break;
    case 'cross-one':
      winnnerLine.classList.add('y-axis', 'winner-cross-one', 'cross-one');
      break;
    default:
      return;
  }
  if (winner === 'x')
    winnnerLine.classList.add('winner-axis-x');
  else if (winner === 'o')
    winnnerLine.classList.add('winner-axis-o');
  setTimeout(() => {
    if (winner === 'x' || winner === 'o') {
      winnnerLine.style.display = 'block';
    }

    if (winner === 'x') {
      document.getElementById('x-wins').style.display = 'block';
    } else if (winner === 'o') {
      document.getElementById('o-wins').style.display = 'block';
      document.querySelector('h1').style.color = '#f2ebd3'
    } else {
      document.getElementById('x-wins').style.marginRight = '100px';
      document.getElementById('x-wins').style.display = 'block';
      document.getElementById('o-wins').style.display = 'block';
      document.querySelector('h1').innerHTML = 'Draw!'
    }
    setTimeout(() => {
      board.style.display = 'none';
      result.style.display = 'flex';
    }, 800);
  }, 500);  
}

let player = 'x';

for(let i=0;i<9;i++){
  const divEle = document.createElement('div');
  divEle.classList.add('pad');
  divEle.setAttribute('id', `p${i}`);
  divEle.addEventListener('click', () => {
    if (player === 'x') {
      divEle.innerHTML = cross;
      player = 'o';
    } else {
      divEle.innerHTML = circle;
      player = 'x';
    }
    moves.push(`p${i+1}`);
    if (moves.length >= 6) {
      checkWin();
    }
  }, { once: true })
  board.appendChild(divEle);
}

