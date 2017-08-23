var width = prompt("What is the width");//ask the user for a width value
var height = prompt("What is the height");//ask the user for a height value

function calculateArea(width,height){//creates a function that takes two parameters
var area = width*height;//multiply the height and width parameter
return area;//value is returned
}
var wallOne = calculateArea(width,height);//call the funtion to calculate the parameters
window.alert(wallOne);//pop up screen to display result