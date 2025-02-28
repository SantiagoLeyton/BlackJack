let card = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
]; //here y made an array with all poker cards, the idea is to make the game more realistic

function takeCard() {
    let randomCard = Math.floor(Math.random() * card.length); //this is used for take a random card from the array "card"
    let newCard = card[randomCard]; //here I used the array and I took the value that is in that position
    deck.splice(randomCard, 1); //I don't wanna repeat a card, so I deleted the card from the array
    return newCard; 
}

let parar = 17;
let final = 21;

let a = jugador + carta2;

let b = dealer + carta2d;

let pedirJ = a >= parar ? a : a + carta3;
let pedirD = b >= parar ? b : b + carta3d;

let resultadoJ;
let resultadoD;

if ( pedirJ === final ) {
    resultadoJ = "¡BLACKJACK!";
} else if ( pedirJ > final ) {
    resultadoJ = pedirJ;
} else {
    resultadoJ = pedirJ;
}

if ( pedirD === final ) {
    resultadoD = "¡BLACKJACK!";
} else if ( pedirD > final ) {
    resultadoD = pedirD;
} else {
    resultadoD = pedirD;
}

let cartasJ = `Estas son las cartas del jugador: ${jugador} + ${carta2} + ${carta3}`;
let cartasD = `Estas son las cartas del dealer: ${dealer} + ${carta2d} + ${carta3d}`;
let sep = "-------------------------------------";

if (resultadoD === "¡BLACKJACK!" && resultadoJ === "¡BLACKJACK!") {

    console.log("¡HUBO UN EMPATE! 😱");
    console.log("Los dos jugadores obtuvieron el ¡BLACKJACK!");
    console.log(cartasJ);
    console.log(sep);
    console.log(cartasD);

} else if (resultadoJ === "¡BLACKJACK!" || resultadoD > final) {

    console.log("¡VICTORIA! 🥳🏆");
    console.log(`El jugador ha ganado con ${resultadoJ}`);
    console.log(cartasJ);
    console.log(sep);
    console.log(`El dealer no tuvo tanta suerte, su resultado fue ${resultadoD}`);
    console.log(cartasD);

} else if (resultadoD === "¡BLACKJACK!" || resultadoJ > final) {

    console.log("DERROTA 😔");
    console.log(`El dealer ha ganado con ${resultadoD}`);
    console.log(cartasD);
    console.log(sep);
    console.log(`El jugador quedó con ${resultadoJ}`);
    console.log(cartasJ);

} else if (resultadoJ > resultadoD) {

    console.log("¡VICTORIA! 🥳🏆");
    console.log(`El jugador ha ganado con ${resultadoJ}`);
    console.log(cartasJ);
    console.log(sep);
    console.log(`El dealer quedó con ${resultadoD}`);
    console.log(cartasD);

} else if (resultadoD > resultadoJ) {

    console.log("DERROTA 😔");
    console.log(`El dealer ha ganado con ${resultadoD}`);
    console.log(cartasD);
    console.log(sep);
    console.log(`El jugador quedó con ${resultadoJ}`);
    console.log(cartasJ);

} else {

    console.log("¡HUBO UN EMPATE! 😱");
    console.log(`Ambos jugadores quedaron con ${resultadoJ}`);
    console.log(cartasJ);
    console.log(sep);
    console.log(cartasD);
    
};