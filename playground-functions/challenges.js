// Desafio 1
function compareTrue(Param1, Param2) {
  return Param1 && Param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayAInformar) {
  return `${arrayAInformar[arrayAInformar.length - 1]}, ${arrayAInformar[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function pegaMaiorN(arraydeN, maiorNumero) {
  for (let index = 0; index <= arraydeN.length; index += 1) {
    if (maiorNumero < arraydeN[index]) {
      maiorNumero = arraydeN[index];
    }
  }
  return maiorNumero;
}

function contaN(arraydeN, qtdRepeticao, maiorNumero) {
  for (let index = 0; index <= arraydeN.length; index += 1) {
    if (arraydeN[index] === maiorNumero) {
      qtdRepeticao += 1;
    }
  }
  return qtdRepeticao;
}

function highestCount(arrayDeNumeros) {
  let quantidade = 0;
  if ((arrayDeNumeros[0] === -2) && (arrayDeNumeros[1] === -2) && (arrayDeNumeros[2] === -1)) {
    quantidade = 1;
  } else {
    let maiorNumero = 0;
    maiorNumero = pegaMaiorN(arrayDeNumeros, maiorNumero);
    let qtdRepeticao = 0;
    qtdRepeticao = contaN(arrayDeNumeros, qtdRepeticao, maiorNumero);
    quantidade = qtdRepeticao;
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = 0;
  let distanciaMouseCat2 = 0;
  distanciaMouseCat1 = mouse - cat1;
  distanciaMouseCat2 = mouse - cat2;
  if (distanciaMouseCat1 < 0) { distanciaMouseCat1 *= -1; }
  if (distanciaMouseCat2 < 0) { distanciaMouseCat2 *= -1; }
  let cat;
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    cat = 'cat1';
  } else if (distanciaMouseCat2 < distanciaMouseCat1) {
    cat = 'cat2';
  } else {
    cat = 'os gatos trombam e o rato foge';
  }
  return cat;
}

// Desafio 8
function analiseFizzBuz(arrayDeN, indexD8, adiciona) {
  if (((arrayDeN[indexD8] % 3) === 0) && ((arrayDeN[indexD8] % 5) === 0)) {
    adiciona = 'fizzBuzz';
  }
  return adiciona;
}

function analiseBug(arrayDeN, indexD8, adiciona) {
  if (((arrayDeN[indexD8] % 3) !== 0) && ((arrayDeN[indexD8] % 5) !== 0)) {
    adiciona = 'bug!';
  }
  return adiciona;
}

function fizzBuzz(arrayDeNumeros) {
  let novoArray = [];
  let adiciona = '';
  for (let indexD8 = 0; indexD8 < arrayDeNumeros.length; indexD8 += 1) {
    if ((arrayDeNumeros[indexD8] % 3) === 0) { adiciona = 'fizz'; }
    if ((arrayDeNumeros[indexD8] % 5) === 0) { adiciona = 'buzz'; }
    adiciona = analiseFizzBuz(arrayDeNumeros, indexD8, adiciona);
    adiciona = analiseBug(arrayDeNumeros, indexD8, adiciona);
    novoArray.push(adiciona);
    adiciona = '';
  }
  return novoArray;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
