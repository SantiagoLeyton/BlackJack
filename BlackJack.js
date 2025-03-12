let cardsP = [ ];
let cardsD = [ ]; //those arrays are empty because here we will add the player and delaer cards
let cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
]; //here I made an array with all poker cards, the idea is to make the game more realistic

function card() {
    let randomCard = Math.floor(Math.random() * cards.length); //this is used for take a random card from the array "card"
    let newCard = cards[randomCard]; //here I used the array and I took the value that is in that position
    cards.splice(randomCard, 1); //I don't wanna repeat a card, so I deleted the card from the array
    return newCard; 
}; 

function showCards(guest, kindCards) {
    document.getElementById(guest).innerHTML = kindCards.join(", ");
}; //here we made a function to show the cards of the player or dealer and avoid write the same code a lot of times

function start() {
    cardsP.push(card(), card())
    cardsD.push(card(), card())
    //here the dealer and the player will have two cards to start the game

    document.getElementById("hitBtn").classList.remove("hidden-f");
    document.getElementById("standBtn").classList.remove("hidden-f");
    document.getElementById("hitBtn").classList.add("show-s");
    document.getElementById("standBtn").classList.add("show-s");
    document.getElementById("startBtn").classList.add("hidden-f");
    //here the code will hide the start button and show hit and stand buttons

    showCards("Player", cardsP);
    document.getElementById("Dealer").innerHTML = cardsD[0] + ", ?";
    //In the BlackJack rules, the second card of the dealer is hidden while the player are playing, when he/she stop, we can watch the dealer cards
};

document.getElementById("hitBtn").addEventListener("click", function() {
    cardsP.push(card());
    showCards("Player", cardsP);
});

document.getElementById("standBtn").addEventListener("click", function() {
    showCards("Player", cardsP);
    showCards("Dealer", cardsD);
});