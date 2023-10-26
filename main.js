// Function to add an item to the cart
var totalPrice = 0;

function addToCart(itemName) {
  // Retrieve the price of the item
  
  var menuItems = document.querySelectorAll('.menu-item');
  var price;

  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    var menuItemName = menuItem.querySelector('h3').textContent;

    if (menuItemName === itemName) {
      var priceElement = menuItem.querySelector('.price');
      price = parseFloat(priceElement.textContent.replace('$', ''));
      break;
    }
  }


  // Create a span element to display the item's price
  var priceSpan = document.createElement("span");
  priceSpan.textContent = "$" + price.toFixed(2);
  priceSpan.classList.add("item-price"); // Add a class for styling

  // Create a new list item for the cart
  var cartItem = document.createElement("li");

  // Create the delete button for the item
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-item");
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    cartItem.remove(); // Remove the item from the cart when delete button is clicked

    // Update the total price
    totalPrice -= price;
    updateTotalPrice();

    // Hide the delete button if the cart is empty
    if (document.getElementById("cart-items").childElementCount === 0) {
      deleteButton.style.display = "none";
    }
  });

  // Create a div to hold the cart item details (name and price)
  var cartItemDetails = document.createElement("div");
  cartItemDetails.classList.add("cart-item-details");
  cartItemDetails.textContent = itemName;

  // Append the cart item details to the cart item
  cartItem.appendChild(cartItemDetails);
  cartItemDetails.appendChild(priceSpan);
  cartItem.appendChild(deleteButton);

  // Append the cart item to the cart
  var cartItems = document.getElementById("cart-items");
  cartItems.appendChild(cartItem);

  // Show the delete button
  deleteButton.style.display = "inline-block";

  // Update the total price
  totalPrice += price;
  updateTotalPrice();
}

// Function to update the total price in the cart
function updateTotalPrice() {
  var totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}

function increaseQuantity(button) {
  var quantityElement = button.previousElementSibling;
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
}

function decreaseQuantity(button) {
  var quantityElement = button.nextElementSibling;
  var currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 1) {
    quantityElement.textContent = currentQuantity - 1;
  }
}

function getCookie(index) {
  // Display the value of the test cookie using alert
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] === index) {
      //  alert(index + " value: " + cookie[1]);
      return cookie[0];
    }
  }
}

