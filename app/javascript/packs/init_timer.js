const timer = () => {
  const secondsLabel = document.getElementById('second-count');
  let totalSeconds = null;

  setInterval(setTime, 1000);

  function setTime() {
    ++totalSeconds;
    if (totalSeconds === 1) {
      secondsLabel.innerHTML = `${totalSeconds} second`;
    } else {
      secondsLabel.innerHTML = `${totalSeconds} seconds`;
    }
  }
}

export default timer;
