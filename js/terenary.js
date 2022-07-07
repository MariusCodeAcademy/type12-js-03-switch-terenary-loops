'use strict';
console.log('terenary');

// <salyga> ? <jei salyga true> : <jei salyga false>

let hours = 15;

// hours = 3;

// let laikas = hours < 6 ? 'yra naktis' : 'yra diena';
let laikas;
if (hours < 6) {
  laikas = 'yra naktis';
} else {
  laikas = 'yra diena';
}

console.log('laikas ===', laikas);

let isDarkModeOn = false;
const darkColor = '#333';
const lightColor = '#fff';

isDarkModeOn = true;

if (isDarkModeOn === true) {
  document.body.style.backgroundColor = darkColor;
  document.body.style.color = lightColor;
} else {
  document.body.style.backgroundColor = lightColor;
  document.body.style.color = darkColor;
}

// document.body.style.backgroundColor = isDarkModeOn === true ? darkColor : lightColor;
