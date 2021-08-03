import timer from './init_timer.js'

const playerMovement = () => {
  document.querySelector('.square').firstElementChild.className = 'player';
  let xPosition = 0;
  let yPosition = 0;
  let timerStarted = false;
  const allowedEvents = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  const xMovement = {'ArrowUp': 0, 'ArrowDown': 0, 'ArrowLeft': -1, 'ArrowRight': 1};
  const yMovement = {'ArrowUp': -1, 'ArrowDown': 1, 'ArrowLeft': 0, 'ArrowRight': 0};
  const xAllowedMovementCheckerAdjustment = {'ArrowUp': 1, 'ArrowDown': 0, 'ArrowLeft': 0, 'ArrowRight': 0};
  const yAllowedMovementCheckerAdjustment = {'ArrowUp': 0, 'ArrowDown': 0, 'ArrowLeft': 1, 'ArrowRight': 0};
  const directionToWallTracker = {'ArrowUp': 'N', 'ArrowDown': 'N', 'ArrowLeft': 'W', 'ArrowRight': 'W'};
  let powerUpCounter = 0

  const movePlayer = () => {
    document.querySelector('.player').classList.remove('player')
    const newLocation = document.getElementsByClassName(`x-${xPosition} y-${yPosition}`)[0].firstElementChild
    newLocation.classList.add('player');
    if (newLocation.classList.value.includes('powerup')) {
      newLocation.classList.remove('powerup');
      powerUpCounter = 2;
    }
  }

  const checkValidMove = () => {
    if (timerStarted === false) {
      timer();
      timerStarted = true;
    }

    xPosition += xMovement[event.key]
    yPosition += yMovement[event.key]
    if (document.getElementsByClassName(`y-${yPosition} x-${xPosition}`)[0] && !document.getElementsByClassName(`y-${yPosition + xAllowedMovementAdjustment[event.key]} x-${xPosition + yAllowedMovementCheckerAdjustment[event.key]}`)[0].classList.value.includes(directionToWallTracker[event.key])) {
      movePlayer()
    } else if (document.getElementsByClassName(`y-${yPosition} x-${xPosition}`)[0] && powerUpCounter > 0) {
      movePlayer()
      powerUpCounter -= 1
    } else {
      xPosition -= xMovement[event.key]
      yPosition -= yMovement[event.key]
    }
  }

  document.addEventListener('keydown', event => {
    if (allowedEvents.includes(event.key)) {
      checkValidMove()
    }
  })
}

export default playerMovement;
