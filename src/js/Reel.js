'use strict';

import ReelElement from "./ReelElement";

export default class Reel {
  constructor(countOfElements, node, symbols) {
    this.countOfElements = countOfElements;
    this.node = node;
    this.arrayOfSymbols = symbols;
    this.id = node.getAttribute('data-reel');
    this.symbolHeight = 200;
    this.currentSymbolPosition = 1;
    this.realArrayOfSymbols = this._createSymbolsArray();

    this.init();
  }

  init() {
    let container = this.node.appendChild(document.createElement('div'));

    this.realArrayOfSymbols
      .map( symbol => this._createElement(symbol, container));

    this.node.appendChild(container.cloneNode(true));

    this.node.scrollTop = this.symbolHeight / 2;
    this.isAnimating = false;
  }

  animate() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    let self = this,
      duration = 1500,
      // delay = 250 * this.id,
      elementsToScroll = Math.random() * 4 + 15 | 0,
      node = this.node,
      currentScroll = this.node.scrollTop;

    this.currentSymbolPosition += elementsToScroll;
    this.currentSymbolPosition = this.currentSymbolPosition > this.realArrayOfSymbols.length - 1 ?
      this.currentSymbolPosition - this.realArrayOfSymbols.length :
      this.currentSymbolPosition;

    this.animateHelper({
      duration: duration,
      timing: self.timingFunction,
      draw(progress) {
        if (node.scrollTop > node.scrollTopMax/2) {
          currentScroll = currentScroll - self.node.scrollTopMax/2 - self.symbolHeight;
          // ++self.currentSymbolPosition;
        }

        let scrollTop = elementsToScroll * self.symbolHeight * progress;
        node.scrollTop = currentScroll + scrollTop;
      }
    });

    return this.getCurrentSymbol();
  }

  timingFunction(timeFraction) {
    return Math.pow(timeFraction, 2);
  }

  animateHelper(options) {
    let self = this;

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = options.timing(timeFraction)
      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      } else {
        self.isAnimating = false;
      }
    });
  }

  _createSymbolsArray() {
    let arr = [],
      divisionResult = Math.ceil(this.countOfElements / this.arrayOfSymbols.length);

    for (let i = 0; i < divisionResult; i++) {
      arr.push(...this.arrayOfSymbols);
    }
    arr = arr.length > this.countOfElements ?
      arr.slice(0, this.countOfElements) : arr;

    return arr.sort(() => Math.random() - .5);
  }

  _createElement(symbol, destination) {
    return new ReelElement(symbol, destination, this.symbolHeight);
  }

  getCurrentSymbol() {
    return this.realArrayOfSymbols[this.currentSymbolPosition];
  }
}