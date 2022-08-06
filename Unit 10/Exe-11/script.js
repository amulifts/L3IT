var array = []
var x=0;

function add_items_to_array() {
  array[x] = document.getElementById("text1").value;
  alert("Element: " + array[x] + " Added at index " + x);
  x++;
  document.getElementById("text1").value = "";
}

function display_array() {
  var e = "<hr/>";

  for (var y = 0; y < array.length; y++) {
    e += "Element " + y + " = " + array[y] + "<br/>";
  }
  document.getElementById("Result").innerHTML = e;
}
