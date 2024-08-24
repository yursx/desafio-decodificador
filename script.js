const inputText = document.querySelector(".inputText");
const mensagem = document.querySelector(".mensagem");

function showError(message){
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.innerText = message;
  errorMessage.classList.remove('hidden');
}

function validateText(text) {
  const regex = /^[a-z\s]*$/;
  return regex.test(text);
}

function limparErro() {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.innerText = '';
  errorMessage.classList.add('hidden');
}

function encriptar(stringCriptografada){

  let matrizCodigo =[["e", "enter"] , ["i", "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]];
  stringCriptografada = stringCriptografada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if (stringCriptografada.includes(matrizCodigo[i][0])){
      stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringCriptografada;

}

function descriptar(stringDescriptografada){

  let matrizCodigo =[["e", "enter"] , ["i", "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u", "ufat"]];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++){
    if (stringDescriptografada.includes(matrizCodigo[i][1])){
      stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDescriptografada;

}

  
function criptografar() {
  const inputText = document.getElementById('inputText').value;
  if (!validateText(inputText)) {
    showError('O texto deve conter apenas letras minúsculas e sem acentos.');
    return;
  }
  limparErro();
  const textoCriptografado = encriptar(inputText);
  document.getElementById('outputTextarea').value = textoCriptografado;
  document.getElementById('outputText').classList.add('hidden');
}
  
function descriptografar() {
  const inputText = document.getElementById('inputText').value;
  if (!validateText(inputText)) {
    showError('O texto deve conter somente letras minúsculas e sem acentos');
    return;
  }
  limparErro();
  const textoDescriptografado = descriptar(inputText);
  document.getElementById('outputTextarea').value = textoDescriptografado;
  document.getElementById('outputText').classList.add('hidden');
}


document.getElementById('copiar').addEventListener('click', execCopy);
function copiar(){
  document.querySelector("#outputTextarea").select();
  document.execCommand("copy");
}