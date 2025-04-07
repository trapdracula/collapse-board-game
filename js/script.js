const players = [
   { name: "Player 1", score: 0 },
   { name: "Player 2", score: 0 },
   { name: "Player 3", score: 0 }
];

var diceContainer = document.getElementById("dice-container");
var die1 = document.getElementById("die1")
var die2 = document.getElementById("die2")
function openModal() {
   document.getElementById("myModal").style.display = "block";
}
function closeModal() {
   document.getElementById("myModal").style.display = "none";
   document.getElementById("main-content").style.display = "block";
}
function rollDie1() {
   return Math.floor(Math.random() * 6) + 1;
};
function rollDie2() {
   return Math.floor(Math.random() * 6) + 1;
}
function diceRoller() {
   var pts1 = rollDie1();
   var pts2 = rollDie2();
   diceContainer.style.color = "Black";
   diceContainer.style.fontSize = "36px";
   die1.innerHTML = pts1;
   die2.innerHTML = pts2;
}

function updateScores() {

}
if (pts1 + pts2 % < 0) {

} else {

}
