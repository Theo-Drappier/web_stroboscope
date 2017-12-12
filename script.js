var state = false;

var color = ['#ffce00', '#005cff'];

var i = 0;

function changeColor() {
  var modulo = i % color.length;
  document.body.style.backgroundColor = color[modulo];
  i++;
}

function launch() {
  interval = setInterval(changeColor, 500);
}

function stop(){
  clearInterval(interval);
}
