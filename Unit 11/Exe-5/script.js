var x = document.getElementById("text");

function validate(x) {
    document.getElementById("nanornot").innerHTML = isNaN(x); //value typed inside text box is nan
}

var check = function () {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm_password").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "matching";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "not matching";
  }
};
