'use strict';

import Reel from "./Reel";

export default class Machine {

  constructor(length, symbols) {
    this.symbols = symbols;
    this.symbolsInReel = length;

    this.init();
  }

  init() {
    let nodes = this._getNodesArray(document.querySelectorAll('[data-reel]'));
    this.reels = nodes.map(el => {
      return this.createReel(this.symbolsInReel, el, this.symbols)
    });
  }

  createReel(length, node, symbols) {
    return new Reel(length, node, symbols)
  }

  startAnimation() {
    this.result = this.reels.map( reel => reel.animate());

    if (this.checkResult(this.result)) {
      document.body.style.backgroundColor = 'green';
    } else {
      document.body.style.backgroundColor = '#ececec';
    }

    console.log(this.checkResult(this.reels));
  }

  _getNodesArray(nodeList) {
    return Array.prototype.map.call(nodeList, el => el)
  }

  checkResult(resultArray) {
    let isWin = false;
    for (let i = 0; i < resultArray.length - 1; i++) {
      isWin = resultArray[i] === resultArray[i + 1];
      if (isWin === false) break;
    }
    return isWin;
  }
}
