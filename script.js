(function() {
  'use strict';
  for (var i = 0; i < 72; i++) {
    var square = document.createElement('div');

    square.className = 'square';
    square.style.width = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.backgroundColor = 'black';

    if (i % 2) {
      square.style.backgroundColor = 'red';
    }
    document.getElementsByClassName('div');
    document.body.appendChild(square);
  }
})();
