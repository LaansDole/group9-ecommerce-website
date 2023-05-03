function updateProductDetails(productId) {
// Get the product display elements from the HTML
var productNameElement = document.querySelector(".product-name");
var productPriceElement = document.querySelector(".product-price-discount span");
var productDescriptionElement = document.querySelector("#description");
var productRatingElements = document.querySelectorAll(".rate input");
var productReviewsElement = document.querySelector(".reviews-counter span");
var productColorSelectElement = document.querySelector("#color");

// Fetch the product data from the server
fetch("https://example.com/api/products/" + productId)
    .then(function(response) {
    if (!response.ok) {
        throw new Error("Error fetching product data: " + response.status);
    }
    return response.json();
    })
    .then(function(data) {
    // Update the product details in the HTML with the fetched data
    productNameElement.textContent = data.name;
    productPriceElement.textContent = "$" + data.price;
    productDescriptionElement.textContent = data.description;
    productRatingElements[data.rating - 1].checked = true;
    productReviewsElement.textContent = data.reviews + " Reviews";

    // Update the color options in the select element
    productColorSelectElement.innerHTML = "";
    data.colorOptions.forEach(function (color) {
        var optionElement = document.createElement("option");
        optionElement.textContent = color;
        productColorSelectElement.appendChild(optionElement);
    });
    })
    .catch(function(error) {
    console.log("Error fetching product data:", error);
    window.location.href = "404.html"; // Redirect to 404.html page
    });
}

// Get the product ID from the URL parameter
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get("id");

// Call the updateProductDetails function with the retrieved product ID
if (productId) {
updateProductDetails(productId);
} else {
console.log("Product ID not found in URL parameter.");
window.location.href = "404.html"; // Redirect to 404.html page
}

