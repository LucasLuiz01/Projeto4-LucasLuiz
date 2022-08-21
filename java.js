let firtsCard = "";
let secondCard = "";
//Criando uma variavel com as imagens
const gits = [
  "fiestaparrot",
  "explodyparrot",
  "bobrossparrot",
  "metalparrot",
  "revertitparrot",
  "tripletsparrot",
  "unicornparrot",
];

//criando a funcao que gera as cartas
const lista = document.querySelector(".corpoCartas");

function GeradorCartas(num) {
    if (num < 4 || num > 14 || num % 2 != 0) {
        
        return GeradorCartas(prompt("qual o numero de cartas?"));
    }
  let item = "";
  let contador = 0;

  while (contador++ < (num/2)) {
    let newItem = ` 
    <div class="card" data-character="${gits[contador]}">
        <div class="face front">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${gits[contador]}.gif"/>               
        </div>
        <div class="face back" onclick="rotateCard(this)">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" />                
        </div>
    </div>
    `;
    item += newItem;
  }

  contador = 0;

  while (contador++ < (num/2)) {

    // random de 0 até num-1

    let newItem = ` 
    <div class="card" data-character="${gits[contador]}">
        <div class="face front">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${gits[contador]}.gif"/>               
        </div>
        <div class="face back" onclick="rotateCard(this)">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" />                
        </div>
    </div>
    `;
    item += newItem;
  }

  lista.innerHTML = lista.innerHTML + item;
}
function checkEndGane() {
  const disablecards = document.querySelectorAll(".disablecard");
  const cartasnojogo = document.querySelectorAll(".card");
  if (disablecards.length === cartasnojogo.length) {
    alert(`parabens, voce ganhou em ${contador} jogadas.`);
  }
}
function checkCards() {
  const firtsCharacter = firtsCard.getAttribute("data-character");
  const secondCharacter = secondCard.getAttribute("data-character");
  if (firtsCharacter === secondCharacter) {
    const filhoum = firtsCard.querySelector(".front");
    const filhodois = secondCard.querySelector(".front");
    filhoum.classList.add("disablecard");
    filhodois.classList.add("disablecard");
    firtsCard = "";
    secondCard = "";
    checkEndGane();
  } else {
    setTimeout(() => {
      firtsCard.classList.remove("girar");
      secondCard.classList.remove("girar");
      firtsCard = "";
      secondCard = "";
    }, 1000);
  }
}
let contador = 0;
//girar a carta ao clicar
function rotateCard(elemento) {
  const virarcard = elemento.parentNode;
   contador++;
   console.log(contador);
  //virarcard.classList.add("girar");

  if (firtsCard === "") {
    virarcard.classList.add("girar");
    firtsCard = virarcard;
  } else if (secondCard === "") {
    virarcard.classList.add("girar");
    secondCard = virarcard;
    checkCards();
  }
}


GeradorCartas(prompt("qual o numero de cartas?"));
