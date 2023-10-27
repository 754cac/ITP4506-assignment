var totalPrice = 0;

function addToCart(itemName, itemPrice) {
  var cartItems = document.getElementById("cart-items");
  var existingItems = cartItems.getElementsByClassName("item-name");
  var newItem = document.createElement("li");
  newItem.innerHTML = `
    <div class="cart-item-details">
      <span class="item-name">${itemName}</span>
      <button class="quantity-button" onclick="decreaseQuantity(this)">-</button>
      <span class="item-quantity">1</span>
      <button class="quantity-button" onclick="increaseQuantity(this)">+</button>
      <span class="item-price">${'$' + itemPrice}</span>
      <button class="delete-button" onclick="removeItem(this)">Delete</button>
    </div>`;

  cartItems.appendChild(newItem);
  totalPrice += itemPrice;
  updateTotalPrice();
}

function increaseQuantity(button) {
  var itemQuantity = button.previousElementSibling;
  var itemPrice = button.parentNode.querySelector(".item-price").textContent;
  var itemName = button.parentNode.querySelector(".item-name").textContent;

  var quantity = parseInt(itemQuantity.textContent);
  var price = parseInt(itemPrice.replace('$', ''));

  itemQuantity.textContent = (quantity + 1).toString();
  totalPrice += price;
  updateTotalPrice();
}

function decreaseQuantity(button) {
  var itemQuantity = button.nextElementSibling;
  var itemPrice = button.parentNode.querySelector(".item-price").textContent;

  var quantity = parseInt(itemQuantity.textContent); // 
  var price = parseInt(itemPrice.replace('$', ''));

  if(quantity === 1){
    var item = button.parentNode;
    item.parentNode.removeChild(item);
    totalPrice -= price;
    updateTotalPrice();
  }else if (quantity > 0) {
    itemQuantity.textContent = (quantity - 1).toString();
    totalPrice -= price;
    updateTotalPrice();
  }
}

    function removeItem(button) {
  var item = button.parentNode.parentNode;
  var itemPrice = button.parentNode.querySelector(".item-price").textContent;
  var itemQuantity = button.parentNode.querySelector(".item-quantity").textContent;

  var price = parseFloat(itemPrice.replace('$', ''));
  var quantity = parseInt(itemQuantity);

  if (!isNaN(price) && !isNaN(quantity)) {
    totalPrice -= price * quantity;
    updateTotalPrice();
  }

  item.parentNode.removeChild(item);
}

    function updateTotalPrice() {
      var totalPriceElement = document.getElementById("total-price");
      totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
    }

    function checkout() {
      // Perform checkout logic here
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