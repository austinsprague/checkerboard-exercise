// Your JS goes here
var checkerboard = function (){
  for (var i = 0; i < 72; i++) {
    var square = document.createElement('div');
    var r = 163 + i;
    var g = 220 + i;
    var b = 240 + i;
    var r2 = 7 + (3 * i);
    var g2 = 7 + (3 * i);
    var b2 = 242 + (3 * i);
    var getHex = 'rgb(' + r + ',' + g + ',' + b +')';
    var getHex2 = 'rgb(' + r2 + ',' + g2 + ',' + b2 +')';

    square.className = 'square';
    square.style.width = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';

    if (i % 2) {
    square.style.backgroundColor = (getHex);
    } else {
    square.style.backgroundColor = (getHex2);
    }

    document.getElementsByClassName('div');
    document.body.appendChild(square);
  }
}

checkerboard();
