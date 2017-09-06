var stem2 = {
	classroom: "f103",
	students: 12,
}
var x = prompt("Classroom or Students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
	window.alert(stem2[lowerCase]);
}
else {
	window.alert("You did not follow the rules FOOOOOOL");
	tryAgain;
}
function tryAgain() {
	var x = prompt("Classroom or Students");
var lowerCase = x.toLowerCase();
if ((lowerCase === "classroom") || (lowerCase === "students")) {
	window.alert(stem2[lowerCase]);
}
else {
	window.alert("You did not follow the rules FOOOOOOL");
	tryAgain();
	}
}