var checkerboard = function (){
  for (var i = 0; i < 72; i++) {
    var getHex ='#' + Math.random().toString(16).slice(2, 8);
    var square = document.createElement('div');

    square.className = 'square';
    square.style.width = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = '11.1%';
    square.style.backgroundColor = (getHex);

    document.getElementsByClassName('div');
    document.body.appendChild(square);
  }

}

checkerboard();
