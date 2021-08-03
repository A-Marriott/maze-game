const mazeCompletionCheck = () => {
  document.addEventListener('keydown', () => {
    if (document.getElementsByClassName('player target')[0]) {
      setTimeout(() => {
        alert(`You won! It took you ${document.getElementById('second-count').innerHTML} to complete`);
        location.reload();
      }, 1);
    }
  })
}

export default mazeCompletionCheck;
