// Desafio 10
function techList(arrayNomesTecnologias, name) {
  arrayNomesTecnologias = arrayNomesTecnologias.sort();
  let resultado = '';
  let novoArrayNomesTecnologias = [];
  for (let indexD10 = 0; indexD10 < arrayNomesTecnologias.length; indexD10 += 1) {
    let objetoAAdicionar = {
      tech: arrayNomesTecnologias[indexD10],
      name,
    };
    novoArrayNomesTecnologias.push(objetoAAdicionar);
  }
  if (arrayNomesTecnologias.length === 0) {
    resultado = 'Vazio!';
  } else {
    resultado = novoArrayNomesTecnologias;
  }
  return resultado;
}

// Desafio 11
const erroTelefone01 = 'não é possível gerar um número de telefone com esses valores';
const erroTelefone02 = 'Array com tamanho incorreto.';

function analiseRepeticao(arrayDeNumeros, indexD111, repetiunumeros) {
  for (let indexD112 = 0; indexD112 < arrayDeNumeros.length; indexD112 += 1) {
    if (arrayDeNumeros[indexD111] === arrayDeNumeros[indexD112]) {
      repetiunumeros += 1;
    }
  }
  return repetiunumeros;
}

function checaErros(arrayDeN, indexD113, repetiu, numeroTelefone) {
  if ((arrayDeN[indexD113] < 0) || (arrayDeN[indexD113] > 9) || (repetiu >= 3)) {
    numeroTelefone = erroTelefone01;
  }
  return numeroTelefone;
}

function checaSeIgualOnze(arrayDeN, repetiu, numeroTelefone) {
  if (arrayDeN.length === 11) {
    for (let indexD113 = 0; indexD113 < arrayDeN.length; indexD113 += 1) {
      numeroTelefone = checaErros(arrayDeN, indexD113, repetiu, numeroTelefone);
    }
  } else { numeroTelefone = erroTelefone02; }
  return numeroTelefone;
}

function montaTelefone(numeroTelefone, stringDoArray) {
  if ((numeroTelefone !== erroTelefone01) && (numeroTelefone !== erroTelefone02)) {
    numeroTelefone = `(${stringDoArray.slice(0, 2)}) ${stringDoArray.slice(2, 7)}`;
    numeroTelefone += `-${stringDoArray.slice(7, 11)}`;
  }
  return numeroTelefone;
}

function checaArray(arraydeN, numeroTelefone) {
  if (arraydeN.length === 0) {
    numeroTelefone = erroTelefone02;
  }
  return numeroTelefone;
}

function checaRepetiu(repetiu, numeroTelefone) {
  if (repetiu >= 3) {
    numeroTelefone = erroTelefone01;
  }
  return numeroTelefone;
}

function generatePhoneNumber(arrayDeNumeros) {
  let numeroTelefone = '';
  let stringDoArray = '';
  let repetiu = 0;
  numeroTelefone = checaArray(arrayDeNumeros, numeroTelefone);
  if (numeroTelefone !== erroTelefone02) {
    for (let indexD111 = 0; indexD111 < arrayDeNumeros.length; indexD111 += 1) {
      repetiu = analiseRepeticao(arrayDeNumeros, indexD111, repetiu);
      numeroTelefone = checaRepetiu(repetiu, numeroTelefone);
      numeroTelefone = checaSeIgualOnze(arrayDeNumeros, repetiu, numeroTelefone);
      repetiu = 0;
      stringDoArray += arrayDeNumeros[indexD111];
    }
    numeroTelefone = montaTelefone(numeroTelefone, stringDoArray);
  }
  return numeroTelefone;
}

// Desafio 12
function okT(linha1, linha2, linha3) {
  if ((linha1 < (linha2 + linha3)) && (linha1 > (linha2 - linha3))) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  let ehtriangulo = false;
  if (okT(lineA, lineB, lineC) && okT(lineB, lineC, lineA) && okT(lineC, lineA, lineB)) {
    ehtriangulo = true;
  }
  return ehtriangulo;
}

// Desafio 13
function hydrate(string) {
  let numeros = string.match(/\d+/g).map(Number);
  let soma = 0;
  let recomendacao = '';
  for (let index13 = 0; index13 < numeros.length; index13 += 1) {
    soma += numeros[index13];
  }
  if (soma > 1) {
    recomendacao = `${soma} copos de água`;
  } else {
    recomendacao = `${soma} copo de água`;
  }
  return recomendacao;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
