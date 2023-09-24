const dynamicForm = document.getElementById("dynamicForm");
const numFieldsDropdown = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");

function generateInputFields(selectedValue) {
  inputContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = `field${i}`;
    inputField.placeholder = `Field ${i}`;
   inputContainer.appendChild(inputField);
  }
}

numFieldsDropdown.addEventListener("change", function () {
  const selectedValue = parseInt(numFieldsDropdown.value);
  generateInputFields(selectedValue);
});

function validateForm(e) {
  const inputFields = inputContainer.querySelectorAll("input");

  for (const inputField of inputFields) {
    if (inputField.value.trim() === "") {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }
  }
}

dynamicForm.addEventListener("submit", validateForm);

