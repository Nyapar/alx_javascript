function welcome(firstName, lastName) {
  // Concatenate firstName and lastName with a space in between
  const fullName = firstName + ' ' + lastName;

  // Define the nested function displayFullName
  function displayFullName() {
    // Display an alert with the welcome message
    alert('Welcome ' + fullName + '!');
  }

  // Call the nested function
  displayFullName();
}

// Test the welcome function
welcome('Holberton', 'School');

