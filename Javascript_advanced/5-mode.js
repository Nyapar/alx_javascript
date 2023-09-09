function addBy(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  };
}

function divideBy(firstNumber) {
  return function(secondNumber) {
    return secondNumber / firstNumber;
  };
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

console.log(addBy100(20));    // Should display 120
console.log(divideBy10(20));  // Should display 2
console.log(divideBy100(200)); // Should display 2
console.log(addBy1000(20));   // Should display 1020

