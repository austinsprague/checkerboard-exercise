// Your JS goes here
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

































//
//
// var redBlack = function(){
//   // var square = document.createElement('div');
//   // square.className = 'square';
//
//   for (var i = 0; i < 70; i++) {
//     if (i % 2) {
//     square.style.color="red"
//   }else{
//     square.style.color="red"
//   }
//     document.getElementsByClassName('square');
//     div.appendChild('div')[i];
//   }
//
// }
//
// redBlack();
