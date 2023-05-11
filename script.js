const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function botaoEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = "none"; // adicionando essa linha
  textArea.value = "";

  setTimeout(() => {
    mensagem.style.backgroundImage = "url(/imagens/boneco.png)";
  }, 2500); // adicionando essa linha
}

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
function encriptar(stringEncriptada) {
  let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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
  mensagem.style.backgroundImage = "none"; // adicionando essa linha
  textArea.value = "";

  setTimeout(() => {
    mensagem.style.backgroundImage = "url(/imagens/boneco.png)";
  }, 1500); // adicionando essa linha
}

function desencriptar(stringDesencriptada) {
  let matrizCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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
  mensagem.value = "";

  setTimeout(() => {
    mensagem.style.backgroundImage = "url(/imagens/boneco.png)";
  }, 200);
}
