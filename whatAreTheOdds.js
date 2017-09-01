var playerOne = prompt("What are the odds 1-10. Dont even try to put decimals");
var playerOne = Math.floor(parseInt(playerOne));
if ((playerOne < 1) || (playerOne > 10) || isNaN(playerOne)){
	window.alert("FOLLOW THE DIRECTIONS");
}
else {
	var playerTwo = prompt("What are the odds 1-10");
  if (playerOne == playerTwo){
  window.alert("LEZZ GOOOOO");
  }
 else {
 	window.alert("Player One answer was " + playerOne);
  window.alert("Player Two chose " + playerTwo)
 }
}
