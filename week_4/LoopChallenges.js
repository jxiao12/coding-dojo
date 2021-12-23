// Print odds 1-20
for (var i = 1; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("Next");
// Decreasing Multiples of 3
for (var i = 3; i < 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
console.log("Next");
// Print the sequence
var arr = [-0.5, 4, -2, -3.5, 2.5, 1];
for (var i = 0; i < arr.length - 1; i++) {
  var min_index = i;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[min_index]) {
      min_index = j;
    }
  }
  var temp = arr[i];
  arr[i] = arr[min_index];
  arr[min_index] = temp;
}
console.log(arr);
// Sigma
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
// Factorial
var product = 1;
for (var i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);
