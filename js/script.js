// Configuração para não carregar js por padrão
window.addEventListener('load', start);

function start() {
  preventChangeColor();
}

function preventChangeColor() {
  event.preventDefault();
}

// Função que cria variáveis e salva valores dos ranges dos inputs, além de retornar os valores das variaveis

function changeColor() {
  var red = document.querySelector('#rangeRed').value;
  var green = document.querySelector('#rangeGreen').value;
  var blue = document.querySelector('#rangeBlue').value;
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.querySelector('.boxRgbColor').style.backgroundColor = color;
  document.querySelector('#colorOutput').innerHTML = color; // escreve o texto na página
}

// Eventos para modificar valores das variáveis
document.querySelector('#rangeRed').addEventListener('input', changeColor);
document.querySelector('#rangeGreen').addEventListener('input', changeColor);
document.querySelector('#rangeBlue').addEventListener('input', changeColor);
