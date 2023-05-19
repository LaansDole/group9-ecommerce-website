// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 2
// Author: Do Le Long An,Truong Hong Van,Bui Tuan Anh,Lao Vinh Khang,Pham Le Quynh Anh
// ID: s3963207,s3957034,s3970375,s3891925,s3927427
// Acknowledgement: MDN Web Docs, RMIT Canvas, ChatGPT, NPM Packages' Docs


// Define a function to update the cart item count in the navigation
function updateCartItemCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartItemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    let cartItemCountElem = document.getElementById('cart-item-count');
    cartItemCountElem.innerText = cartItemCount; // Update the cart item count element
}

// Define a function to add a product to the cart
function addToCart(productId, quantity, productPrice, productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[productId] = {
        quantity: (cart[productId]?.quantity || 0) + quantity,
        price: productPrice,
        name: productName
    };
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItemCount();
}

// Define a function to remove a product from the cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (!cart[productId]) {
        return; // Product not found in the cart
    }
    delete cart[productId];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItemCount();
    populateCartPage();
}

// Define a function to clear the cart
function clearCart() {
    const cartTotal = parseInt(document.querySelector('#cart-total').textContent);
    if (cartTotal === 0) {
        alert('Cart is already empty!');
        return;
    }
    localStorage.removeItem('cart');
    updateCartItemCount();
    populateCartPage();
    location.reload();
}

// Define a function to populate the cart page with the list of products and quantities
function populateCartPage() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartTableBody = document.getElementById('cart-table-body');
    let totalPrice = 0;

    cartTableBody.innerHTML = '';

    Object.keys(cart).forEach(productId => {
        let product = cart[productId];
        let quantity = product.quantity;
        let price = product.price;
        let name = product.name;

        // Create a row for this product
        let row = document.createElement('tr');

        // Add a cell for the product name
        let nameCell = document.createElement('td');
        nameCell.textContent = name;
        row.appendChild(nameCell);

        // Add a cell for the product quantity
        let quantityCell = document.createElement('td');
        quantityCell.textContent = quantity;
        row.appendChild(quantityCell);

        // Add a cell for the product price
        let priceCell = document.createElement('td');
        priceCell.textContent = price;
        row.appendChild(priceCell);

        // Add a cell for the remove button
        let removeCell = document.createElement('td');
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(productId));
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);


        // Calculate the total price for this product
        let productTotalPrice = quantity * price;
        totalPrice += productTotalPrice;

        // Add the row to the table body
        cartTableBody.appendChild(row);
    });

    // Display the total price
    let totalElem = document.getElementById('cart-total');
    totalElem.textContent = totalPrice;
}

function submitOrder() {
    const cartTotal = parseInt(document.querySelector('#cart-total').textContent);
    if (cartTotal === 0) {
        alert('Cart is empty. Please add products to your cart before submitting the order.');
        return;
    }
    const orderData = {
        customerName: document.querySelector('input[name="customerName"]').value,
        customerAddress: document.querySelector('input[name="customerAddress"]').value,
        hubDelivery: document.getElementById('hubDeliverySelect').value,
        products: JSON.parse(localStorage.getItem('cart')) || {}
    };

    fetch('/order/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Clear the cart after successful submission
            clearCart();
            alert('Order submitted successfully!');
        })
        .catch(error => {
            console.log(error);

            alert('Your Order is confirm!.');
        });
}

// Update the cart item count on page load
window.addEventListener('DOMContentLoaded', updateCartItemCount);
