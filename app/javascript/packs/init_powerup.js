const powerUp = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const targetxPosition = document.querySelector('.end-goal-details').dataset['xPosition'];
  const targetyPosition = document.querySelector('.end-goal-details').dataset['yPosition'];
  const gridSize = Math.sqrt(document.querySelector('.grid').childElementCount);
  let powerUpxPosition = random(1, gridSize - 2)
  let powerUpyPosition = random(1, gridSize - 2)

  while (powerUpxPosition === targetxPosition) {
    powerUpxPosition = random(1, gridSize - 2)
  }

  while (powerUpyPosition === targetxPosition) {
    powerUpyPosition = random(1, gridSize - 2)
  }

  document.getElementsByClassName(`x-${powerUpxPosition} y-${powerUpyPosition}`)[0].firstElementChild.classList.add('powerup');
}

export default powerUp;
