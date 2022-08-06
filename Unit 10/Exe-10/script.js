var length = prompt("Enter number for the length of your rectangle.");
var width = prompt("Enter number for the width of your rectangle.");
function area(length, width) {
  return length * width;
}

document.write("The area of your rectangle is " + area(length, width));