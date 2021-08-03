const mazeCompletionCheck = () => {
  document.addEventListener('keydown', () => {
    if (document.getElementsByClassName('player target')[0]) {
      setTimeout(() => {
        alert(`You won in ${document.getElementById('second-count').innerHTML}!`);
        location.reload();
      }, 1);
    }
  })
}

export default mazeCompletionCheck;
