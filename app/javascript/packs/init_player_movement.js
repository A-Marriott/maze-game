import timer from './init_timer.js'

const playerMovement = () => {
  document.querySelector('.square').firstElementChild.className = 'player-btn';
  let x_position = 0;
  let y_position = 0;
  let timerStarted = false;
  document.addEventListener('keydown', event => {
    if (timerStarted === false) {
      timer();
      timerStarted = true;
    }
    if (event.key === 'ArrowDown' && document.getElementsByClassName(`y-${y_position + 1}`)[0] && !document.getElementsByClassName(`y-${y_position + 1} x-${x_position}`)[0].classList.value.includes('N')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      y_position += 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.classList.add('player-btn');
    } else if (event.key === 'ArrowUp' && document.getElementsByClassName(`y-${y_position - 1}`)[0] && !document.getElementsByClassName(`y-${y_position} x-${x_position}`)[0].classList.value.includes('N')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      y_position -= 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.classList.add('player-btn');
    } else if (event.key === 'ArrowLeft' && document.getElementsByClassName(`x-${x_position - 1}`)[0] && !document.getElementsByClassName(`y-${y_position} x-${x_position}`)[0].classList.value.includes('W')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      x_position -= 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.classList.add('player-btn');
    } else if (event.key === 'ArrowRight' && document.getElementsByClassName(`x-${x_position + 1}`)[0] && !document.getElementsByClassName(`y-${y_position} x-${x_position + 1}`)[0].classList.value.includes('W')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      x_position += 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.classList.add('player-btn');
    }
  })
}

export default playerMovement;
