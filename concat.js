function concat(arr1, arr2) {
  if (arr1 === []){
    return arr2
  } else if (arr2 === []){
    return arr1
  }

  for (var i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  return arr1;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);