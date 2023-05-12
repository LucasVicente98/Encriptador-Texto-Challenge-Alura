const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function botaoEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = "none";
  textArea.value = "";

  setTimeout(() => {
    mensagem.style.backgroundImage = "url(/imagens/boneco.png)";
  }, 2500); // adicionando essa linha
}

// A letra "e" é convertida para "entry"
// A letra "i" é convertida para "interm"
// A letra "a" é convertida para "alah"
// A letra "o" é convertida para "orbit"
// A letra "u" é convertida para "uhfa"

function encriptar(stringEncriptada) {
  let matrizCode = [["e", "entry"], ["i", "interm"], ["a", "alah"], ["o", "orbit"], ["u", "uhfa"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringEncriptada.includes(matrizCode[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCode[i][0], matrizCode[i][1]);
    }
  }

  return stringEncriptada;
}

function botaoDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage = "none";
  textArea.value = "";

  setTimeout(() => {
    mensagem.style.backgroundImage = "url(/imagens/boneco.png)";
  }, 1500);
}

function desencriptar(stringDesencriptada) {
  let matrizCode = [["e", "entry"], ["i", "interm"], ["a", "alah"], ["o", "orbit"], ["u", "uhfa"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (stringDesencriptada.includes(matrizCode[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCode[i][1], matrizCode[i][0]);
    }
  }

  return stringDesencriptada;
}

function copiar() {
  mensagem.select();
  mensagem.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
  mensagem.value = ""; // Após copiar o texto, text area volta a ficar em branco.

  setTimeout(() => {
    mensagem.style.backgroundImage = "url(/imagens/boneco.png)";
  }, 200);
}
