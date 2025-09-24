const tully_speak_text = "Oi eu sou tully! e aqui você encontra informações sobre meus desenhos.\n\n Algumas dessas informações consiste em: Exemplo de artes, tabela de preços, Termos de Serviços e links para contato!"
const artGrid = document.getElementById('art-grid');
const tullySpeakElement = document.getElementById('tullySpeak');
const artQuantity = 5;

for (let i = 0; i < artQuantity; i++) {
    var img = document.createElement("img");
    img.src = "./imgs/" + i + ".png";
    img.classList.add("art_img");
    artGrid.appendChild(img);
}

const words = tully_speak_text.split(' ');
let frase = '';
for (let i = 0; i < words.length; i++) {
    setTimeout(function() {
        frase += words[i] + ' ';
        tullySpeakElement.innerText = frase;
      }, 100 * i);
}


