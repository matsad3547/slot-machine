'use strict';

export default function setbgColor(colorString) {
  document.body.style.backgroundColor = colorString;
}

export function setSomething(colorString) {
  document.body.style.borderWidth = '25px';
  document.body.style.margin = 0;
  document.body.style.borderStyle = 'solid';
  document.body.style.borderColor = colorString;
}