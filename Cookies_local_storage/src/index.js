function setCookies() {
  const firstnameInput = document.getElementById('firstname');
  const emailInput = document.getElementById('email');

  const firstnameValue = firstnameInput.value;
  const emailValue = emailInput.value;

  document.cookie = `firstname=${firstnameValue}`;
  document.cookie = `email=${emailValue}`;

  alert('Cookies set successfully!');
}

function showCookies() {
  const cookies = document.cookie;
  const outputDiv = document.getElementById('output');

  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Cookies: ${cookies}`;
  
  outputDiv.appendChild(paragraph);
}

