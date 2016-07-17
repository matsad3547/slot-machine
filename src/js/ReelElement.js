'use strict';

export default class ReelElement {
  constructor(symbol, destination, symbolHeight) {
    this.symbol = symbol;
    this.destination = destination;
    this.symbolHeight = symbolHeight;

    this.init();
  }

  init(){
    let path = `url('static/assets/symbol${this.symbol}.png')`;

    let div = document.createElement('div');
    div.className = "machine__symbol";
    div.setAttribute('data-symbol', this.symbol);
    div.style.backgroundImage = path;
    div.style.height = `${this.symbolHeight}px`;

    this.destination.appendChild(div);
  }
}