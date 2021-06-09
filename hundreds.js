function howManyHundreds(num) {
  return ((num / 100)) - ((num % 100) / 100);
}
console.log("How many hundreds: " + howManyHundreds(1000));