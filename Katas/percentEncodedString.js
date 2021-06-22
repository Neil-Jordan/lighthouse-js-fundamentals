const urlEncode = function(text) {
  let array = text.split('');
  
  if (array[0] === ' ') {
    array.splice(0,1);
  }

  for (let i = 0; i < array.length-1; i++) {
    if (array[i] === ' ') {
      array.splice(i, 1, '%20');
    }
  }

  return array.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));