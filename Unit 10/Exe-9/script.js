function array(arr) {
  var sum = 0, prod = 1;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    prod *= arr[i];
  }
  console.log(sum);
  console.log(prod);
}
array([5, 1, 3, 3, 2]);