#!/usr/bin/node
// Define a global variable
var globalVariable = 'Welcome';

// Define the outer function
function outer() {
  // Alert the content of globalVariable
  alert(globalVariable);

  // Create a variable course
  var course = 'Holberton';

  // Define the inner function
  function inner() {
    // Alert the content of globalVariable and course
    alert(globalVariable + ' ' + course);

    // Create a variable exclamation
    var exclamation = '!';

    // Define the inception function
    function inception() {
      // Alert the content of globalVariable, course, and exclamation
      alert(globalVariable + ' ' + course + exclamation);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function
outer();

