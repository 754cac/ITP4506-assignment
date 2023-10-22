// Function to add an item to the cart
function addToCart(itemName) {
    // Create a new list item for the cart
    var cartItem = document.createElement("li");
    cartItem.textContent = itemName;
  
    // Create the delete button for the item
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-item");
    deleteButton.textContent = "Delete";
  
    // Add event listener to delete button
    deleteButton.addEventListener("click", function () {
      cartItem.remove(); // Remove the item from the cart when delete button is clicked
  
      // Hide the delete button if the cart is empty
      if (document.getElementById("cart-items").childElementCount === 0) {
        deleteButton.style.display = "none";
      }
    });
  
    // Append the delete button to the cart item
    cartItem.appendChild(deleteButton);
  
    // Append the item to the cart
    var cartItems = document.getElementById("cart-items");
    cartItems.appendChild(cartItem);
  
    // Show the delete button
    deleteButton.style.display = "inline-block";
  }
  
  
  // Function to handle the checkout process
  function checkout() {
    // Retrieve the selected items from the cart
    var cartItems = document.getElementById("cart-items").getElementsByTagName("li");
    var selectedItems = [];
    for (var i = 0; i < cartItems.length; i++) {
      selectedItems.push(cartItems[i].textContent);
    }
  
    alert("Order placed successfully!\nSelected items: " + selectedItems.join(", "));
  
    // Clear the cart
    document.getElementById("cart-items").innerHTML = "";
  }