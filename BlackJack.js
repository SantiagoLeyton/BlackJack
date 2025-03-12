let player = Math.floor( Math.random() * 10 ) + 1;
let dealer = Math.floor( Math.random() * 10 ) + 1;

let card2 = Math.floor( Math.random() * 10 ) + 1;
let card2d = Math.floor( Math.random() * 10 ) + 1;

let card3 = Math.floor( Math.random() * 10 ) + 1;
let card3d = Math.floor( Math.random() * 10 ) + 1;

let st0p = 17;
let final = 21;

let a = player + card2;
let b = dealer + card2d;

let takeJ = a >= st0p ? a : a + card3;
let takeD = b >= st0p ? b : b + card3d;

let resultJ;
let resultD;

if ( takeJ === final ) {
    resultJ = "¡BLACKJACK!";
} else if ( takeJ > final ) {
    resultJ = takeJ;
} else {
    resultJ = takeJ;
}

if ( takeD === final ) {
    resultD = "¡BLACKJACK!";
} else if ( takeD > final ) {
    resultD = takeD;
} else {
    resultD = takeD;
}

let cardsJ = `These are the player's cards: ${player} + ${card2} + ${card3}`;
let cardsD = `These are the dealer's cards: ${dealer} + ${card2d} + ${card3d}`;
let sep = "-------------------------------------";

if (resultD === "¡BLACKJACK!" && resultJ === "¡BLACKJACK!") {

    console.log("¡THERE WAS A TIE! 😱");
    console.log(`Both players got ${resultJ}`);
    console.log(cardsJ);
    console.log(sep);
    console.log(cardsD);

} else if (resultJ === "¡BLACKJACK!" || resultD > final) {

    console.log("¡VICTORY! 🥳🏆");
    console.log(`Player won with ${resultJ}`);
    console.log(cardsJ);
    console.log(sep);
    console.log(`Dealer lost with ${resultD}`);
    console.log(cardsD);

} else if (resultD === "¡BLACKJACK!" || resultJ > final) {

    console.log("YOU LOOSE 😔");
    console.log(`Dealer won with ${resultD}`);
    console.log(cardsD);
    console.log(sep);
    console.log(`Player loose with ${resultJ}`);
    console.log(cardsJ);

} else if (resultJ > resultD) {

    console.log("¡VICTORY! 🥳🏆");
    console.log(`Player won with ${resultJ}`);
    console.log(cardsJ);
    console.log(sep);
    console.log(`Dealer lost with ${resultD}`);
    console.log(cardsD);

} else if (resultD > resultJ) {

    console.log("YOU LOOSE 😔");
    console.log(`Dealer won with ${resultD}`);
    console.log(cardsD);
    console.log(sep);
    console.log(`Player loose with ${resultJ}`);
    console.log(cardsJ);

} else {

    console.log("¡THERE WAS A TIE! 😱");
    console.log(`Both players got ${resultJ}`);
    console.log(cardsJ);
    console.log(sep);
    console.log(cardsD);
    
};