//Creates an array with all our of cards 
let cards = [
    {
      rank: "queen",
      suit: "hearts",
      cardImage: "images/queen-of-hearts.png"
    },
    {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png"
    },
    {
      rank: "king",
      suit: "hearts",
      cardImage: "images/king-of-hearts.png"
    },
    {
      rank: "king",
      suit: "diamonds",
      cardImage: "images/king-of-diamonds.png"
    }
  ];
  
let secCounter = 0;
let minCounter = 0;
let time;
let isFirstClick = true;


//start time function
function timedCount() {
    secCounter++;
    if (secCounter === 60) {
        secCounter = 0;
        minCounter++;
    }
    document.querySelector("#time").innerHTML = minCounter + ":" + secCounter;
    console.log("counterSec: " + secCounter);
    time = setTimeout(timedCount, 1000);
}


  //array to push the open cards
  let cardsInPlay = [];
  
  //Function check matched cards
  function checkForMatch() {

    //Only run if two cards are selected
    if (cardsInPlay.length === 2) {  
      
      //then will checke to see if they match
      if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
        } else {
          alert("Sorry, try again.");
        }

        //Game over if all cards opened
    }else if(cardsInPlay.length === 4){
        // stop time
    clearTimeout(time);

    //display alert
    alert("Congratulate ★★★★\n"+ "Time: " + time + " seconds");
    }
 
  };
  
  //Function that shows which card is chosen and sends it to the cardsInPlay
  function flipCard() {

    if (isFirstClick) {
      // Start our timer
      timedCount();
      // Change our First Click indicator's value
      isFirstClick = false;
  }

    var cardId = this.getAttribute("data-id");
  
    cardsInPlay.push(cards[cardId].rank);
  
    if (cardsInPlay.length === 1) {
      this.setAttribute("src", cards[cardId].cardImage);
      console.log(cardsInPlay);

    } else if (cardsInPlay.length > 1) {
      this.setAttribute("src", cards[cardId].cardImage);
      setTimeout(checkForMatch, 200);
    
    }
  }
  
  // create the board with provided cards
  function createBoard() {
      
      //Loop reading each of the cards  
      for (var i = 0; i < cards.length; i++) {
        
        //Creating a card with its unique properties for every card in the loop
        let cardElement = document.createElement('img');
                          cardElement.setAttribute('src', "images/back.png");
                          cardElement.setAttribute('data-id', i);
                          cardElement.addEventListener('click', flipCard);
                          document.getElementById('game-board').appendChild(cardElement);
      }
  
  }
  
  createBoard();
  
  