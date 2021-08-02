// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // maybe don't need x and y for up down
  document.querySelector('.square').firstElementChild.className = 'player-btn';
  let x_position = 0;
  let y_position = 0;
  document.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' && document.getElementsByClassName(`y-${y_position + 1}`)[0] && !document.getElementsByClassName(`y-${y_position + 1} x-${x_position}`)[0].classList.value.includes('N')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      y_position += 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.className = 'player-btn';
    } else if (event.key === 'ArrowUp' && document.getElementsByClassName(`y-${y_position - 1}`)[0] && !document.getElementsByClassName(`y-${y_position} x-${x_position}`)[0].classList.value.includes('N')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      y_position -= 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.className = 'player-btn';
    } else if (event.key === 'ArrowLeft' && document.getElementsByClassName(`x-${x_position - 1}`)[0] && !document.getElementsByClassName(`y-${y_position} x-${x_position}`)[0].classList.value.includes('W')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      x_position -= 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.className = 'player-btn';
    } else if (event.key === 'ArrowRight' && document.getElementsByClassName(`x-${x_position + 1}`)[0] && !document.getElementsByClassName(`y-${y_position} x-${x_position + 1}`)[0].classList.value.includes('W')) {
      document.querySelector('.player-btn').classList.remove('player-btn')
      x_position += 1
      document.getElementsByClassName(`x-${x_position} y-${y_position}`)[0].firstElementChild.className = 'player-btn';
    }
  })
});
