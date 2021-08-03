const preventKeyboardScroll = () => {
  window.addEventListener("keydown", function(e) {
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
          e.preventDefault();
      }
  }, false);
}

export default preventKeyboardScroll;
