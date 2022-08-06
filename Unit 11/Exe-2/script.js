function dateandtime() {
  document.getElementById("head").innerHTML = " ";
  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  document.write((dateTime = date + " " + time));
}
