function lastIndexOf(array, value) {
  var index = -1
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      index = i;
    }
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([], 3), "=?", -1);