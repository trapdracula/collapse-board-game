const game = {
   players: [], // Array to store player objects
   bank: null, // The current bank player
   equityPile: 0, // The shared equity pile
   turnIndex: 0, // Keeps track of whose turn it is
   playerCount: 0, // Sets number of players
};
var diceContainer = document.getElementById("dice-container");
var die1 = document.getElementById("die1")
var die2 = document.getElementById("die2")

function startGame(){
   document.getElementById('input-form').style.display = 'block';
};
   function rollDie1(){
   return Math.floor(Math.random()*6)+1;
};
function rollDie2(){
   return Math.floor(Math.random()*6)+1;
}
function diceRoller(){
   var pts1 = rollDie1();
   var pts2 = rollDie2();
      diceContainer.style.color = "Black";
      diceContainer.style.fontSize = "36px";
      die1.innerHTML = pts1;
      die2.innerHTML = pts2;
}

if (pts1+pts2 ) {
   
} else {
   
}
