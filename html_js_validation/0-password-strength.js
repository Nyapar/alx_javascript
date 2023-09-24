const passwordForm = document.getElementById("passwordForm");
const errorElement = document.getElementById("error");

// Function to validate the password
function validatePassword(password) {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/;

  if (
    password.length < minLength ||
    !uppercaseRegex.test(password) ||
    !lowercaseRegex.test(password) ||
    !digitRegex.test(password) ||
    !specialCharRegex.test(password)
  ) {
    return false;
  }

  return true;
}

passwordForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;

  if (validatePassword(password)) {
    errorElement.textContent = "";
    passwordForm.submit();
  } else {
    errorElement.textContent =
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
  }
});

