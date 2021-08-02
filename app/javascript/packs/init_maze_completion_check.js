const mazeCompletionCheck = () => {
  document.addEventListener('keydown', () => {
    if (document.getElementsByClassName('player target')[0]) {
      alert(`You won! It took you ${document.getElementById('second-count').innerHTML} to complete`);
      location.reload();
    }
  })
}

export default mazeCompletionCheck;

