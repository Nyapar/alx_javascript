const submitForm = document.getElementById("submitForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
function handleFormSubmit(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all required fields.");
  } else {
    alert("Form submitted successfully!");

  }
}

submitForm.addEventListener("submit", handleFormSubmit);

