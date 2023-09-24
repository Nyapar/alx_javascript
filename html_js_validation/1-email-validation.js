const emailForm = document.getElementById("emailForm");
const errorElement = document.getElementById("error");

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

emailForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  if (validateEmail(email)) {
    errorElement.textContent = "";
    emailForm.submit();
  } else {
    errorElement.textContent = "Please enter a valid email address.";
  }
});

