import timer from './init_timer.js'

const playerMovement = () => {
  document.querySelector('.square').firstElementChild.className = 'player';
  let xPosition = 0;
  let yPosition = 0;
  let timerStarted = false;
  const xMovement = {'ArrowLeft': -1, 'ArrowRight': 1};
  const yMovement = {'ArrowUp': -1, 'ArrowDown': 1};
  let powerUpCounter = 0

  const movePlayer = (keyPress) => {
    document.querySelector('.player').classList.remove('player')
    if (xMovement[keyPress]) {
      xPosition += xMovement[keyPress]
    } else {
      yPosition += yMovement[keyPress]
    }
    const newLocation = document.getElementsByClassName(`x-${xPosition} y-${yPosition}`)[0].firstElementChild

    newLocation.classList.add('player');
    if (newLocation.classList.value.includes('powerup')) {
      newLocation.classList.remove('powerup');
      powerUpCounter = 2;
    }
  }

  document.addEventListener('keydown', event => {
    if (timerStarted === false) {
      timer();
      timerStarted = true;
    }

    if (event.key === 'ArrowDown' && document.getElementsByClassName(`y-${yPosition + 1}`)[0]) {
      if (!document.getElementsByClassName(`y-${yPosition + 1} x-${xPosition}`)[0].classList.value.includes('N')) {
        movePlayer(event.key)
      } else if (powerUpCounter > 0) {
        movePlayer(event.key)
        powerUpCounter -= 1
      }
    } else if (event.key === 'ArrowUp' && document.getElementsByClassName(`y-${yPosition - 1}`)[0]) {
      if (!document.getElementsByClassName(`y-${yPosition} x-${xPosition}`)[0].classList.value.includes('N')) {
        movePlayer(event.key)
      } else if (powerUpCounter > 0) {
        movePlayer(event.key)
        powerUpCounter -= 1
      }
    } else if (event.key === 'ArrowLeft' && document.getElementsByClassName(`x-${xPosition - 1}`)[0] && !document.getElementsByClassName(`y-${yPosition} x-${xPosition}`)[0].classList.value.includes('W')) {
      movePlayer(event.key)
    } else if (event.key === 'ArrowRight' && document.getElementsByClassName(`x-${xPosition + 1}`)[0] && !document.getElementsByClassName(`y-${yPosition} x-${xPosition + 1}`)[0].classList.value.includes('W')) {
      movePlayer(event.key)
    }
  })
}

export default playerMovement;
