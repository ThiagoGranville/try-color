const bolas = document.querySelectorAll('.ball');
const textoCor = document.querySelector('#rgb-color');
const textoResposta = document.querySelector('#answer');
const cores = [];

function numeroAleatorio(num) {
  const numero = Math.floor(Math.random() * num);
  return numero;
}

function corAleatoria() {
  const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(
    256
  )}, ${numeroAleatorio(256)})`;
  return rgb;
}

function cliqueNaBola(event) {
  const corSelecionada = event.target.style.backgroundColor;
  if (corSelecionada === textoCor.textContent) {
    textoResposta.textContent = 'Acertou!';
  } else {
    textoResposta.textContent = 'Errou! Tente novamente!';
  }
}

for (let bola = 0; bola < bolas.length; bola += 1) {
  const cor = corAleatoria();
  bolas[bola].style.backgroundColor = cor;
  cores[bola] = cor;
  bolas[bola].addEventListener('click', cliqueNaBola);
}

function adicionaCorAleatoria() {
  textoCor.textContent = cores[numeroAleatorio(6)];
}

adicionaCorAleatoria();
