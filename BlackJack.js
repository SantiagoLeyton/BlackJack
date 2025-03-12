let cardsP = [ ];
let cardsD = [ ]; //those arrays are empty because here we will add the player and delaer's cards
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
    cardsP.push(card(), card());
    cardsD.push(card(), card());
    //here the dealer and the player will have two cards to start the game

    document.getElementById("hitBtn").classList.remove("hidden-f");
    document.getElementById("hitBtn").classList.add("show-s");

    document.getElementById("standBtn").classList.remove("hidden-f");
    document.getElementById("standBtn").classList.add("show-s"); 
   
    document.getElementById("startBtn").classList.add("hidden-f");
    //here the code will hide the start button and show hit and stand buttons

    showCards("Player", cardsP);
    document.getElementById("Dealer").innerHTML = cardsD[0] + ", ?";
    //In the BlackJack rules, the second card of the dealer is hidden while the player are playing, when he/she stop, we can watch the dealer cards
};

function restart() {
    cardsP = [];
    cardsD = [];
    cards = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
    ];

    document.getElementById("Player").innerHTML = "";
    document.getElementById("Dealer").innerHTML = "";

    document.getElementById("restartBtn").classList.remove("show-s");
    document.getElementById("restartBtn").classList.add("hidden-f");

    start();
}


function stand() {
    showCards("Dealer", cardsD);
}

function verify(a) {
    if(a >= 21) {
        if(a == 21) { // I hide hit and stand's button and show restart button
            alert('YOU WIN!');
            document.getElementById('restartBtn').classList.add("show-s");
            document.getElementById('restartBtn').classList.remove("hidden-f");
            document.getElementById("hitBtn").classList.add("hidden-f");
            document.getElementById("hitBtn").classList.remove("show-s");
            document.getElementById("standBtn").classList.add("hidden-f");
            document.getElementById("standBtn").classList.remove("show-s");
            stand();
        } else { // Here i do the same than before but with other alert message
            alert('YOU LOOSE!')
            document.getElementById('restartBtn').classList.add("show-s");
            document.getElementById('restartBtn').classList.remove("hidden-f");
            document.getElementById("hitBtn").classList.add("hidden-f");
            document.getElementById("hitBtn").classList.remove("show-s");
            document.getElementById("standBtn").classList.add("hidden-f");
            document.getElementById("standBtn").classList.remove("show-s"); 
            stand();
        };
    };
};

function hit() {
    let total = cardsP.reduce((acc, num) => acc + num);
    //here we used .reduce to know the sum of the player's cards

    if (total <= 20) {
        if (total >= 18) { // Here I tried to warn the player that he has a lot of cards
            let question;
            do {
                question = parseInt(prompt("Now you've cards that add up a too high value\nDo you wanna continue?\n\n1. Yes\n2. No"));

                if (question == 1) {
                    cardsP.push(card());
                    showCards("Player", cardsP);
                    total = cardsP.reduce((acc, num) => acc + num); // We added a card, here we are counting the cards again
                    verify(total);
                } else if (question == 2 || question == null) {
                    // If the user click "cancel" in the prompt, question will be the same as null
                    showCards("Player", cardsP);
                    verify(total);
                } else {
                    alert('Select a valid option');
                };
            } while (question !== 1 && question !== 2 && question !== null); // Repite solo si la opción es inválida
        } else {
            cardsP.push(card());
            showCards("Player", cardsP);
            total = cardsP.reduce((acc, num) => acc + num);
            verify(total);
        }
    }
}


document.getElementById('startBtn').addEventListener("click", start)
document.getElementById('hitBtn').addEventListener("click", hit)
document.getElementById('standBtn').addEventListener("click", stand)
document.getElementById('restartBtn').addEventListener("click", restart);