'use strict';

import Machine from "./Machine";

let symbols = [ 'A', 'A', 'A', 'D', 'E' ];

let machine = new Machine( 20, symbols );

document.getElementById('start').addEventListener('click', () => machine.startAnimation());

