const deg = 6;
const hr = document.querySelector('#hr'),
  mn = document.querySelector('#mn'),
  sc = document.querySelector('#sc');

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;
