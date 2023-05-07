// Your Unsplash client access key
const accessKey = "1Oa35brxfgWj8k9QlOyicMABwD5I23D-jr-Djwxm-EM";

// Function to set random image as the background of the image-container div
function setRandomBackground() {
    // Construct the API URL
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

    // Fetch the random image data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Get the image URL from the response data
            const imageUrl = data.urls.regular;

            // Set the random image as the background of the image-container div
            const imageContainer = document.querySelector('.image-container');
            imageContainer.style.backgroundImage = `url('${imageUrl}')`;
        })
        .catch(error => {
            console.log("Error fetching random image:", error);
            // Handle the error appropriately, e.g., set a default background image
        });
}

// Call the setRandomBackground function to set a random image as the background on page load
setRandomBackground();