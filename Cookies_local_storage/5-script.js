// Check if session storage is available
function isSessionStorageAvailable() {
  try {
    const testKey = 'test';
    sessionStorage.setItem(testKey, testKey);
    sessionStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

// Array of available items
const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

// Function to add an item to the cart
function addItemToCart(item) {
  sessionStorage.setItem(item, 'true');
  displayCart();
}

// Function to create the store
function createStore() {
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'store');

  availableItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => addItemToCart(item));
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

// Function to display the cart
function displayCart() {
  const cartItems = Object.keys(sessionStorage);
  const cartMessage = document.getElementById('cart-message');

  if (cartItems.length > 0) {
    const message = `You previously had ${cartItems.length} item(s) in your cart.`;
    cartMessage.textContent = message;
  } else {
    cartMessage.textContent = '';
  }
}

// Check if session storage is available
if (isSessionStorageAvailable()) {
  createStore();
  displayCart();
} else {
  alert('Sorry, your browser does not support session storage. Try again with a better one.');
}


