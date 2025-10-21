// API Url and API key necessary for access 
const apiUrl = 'https://api.thedogapi.com/v1/breeds'; // Endpoint. Will return dog breed information
const apiKey = 'live_wl6vbIHTCGrp2NzQl4unx03tEdkPD9arXg00TLSqMtvcZR4lWiim4UegJQrlesp0';

// Making API call to TheDog API for dog breed information
fetch(apiUrl, {
    headers: {
        'x-api-key': apiKey
    }
})
    .then(response => {
        // If we get an error, throw this message to the user instead of parsing
        if(!response.ok){
            throw new Error('Failed to fetch dog data. Please try again later.');
        }
        // Parse json
        return response.json(); 
    })
    // Storing all dog info from the API in the data var
    .then(data => {
        console.log(data);
        displayDogs(data); // displays the data on webpage
    })
    // This will run if anything goes wrong 
    .catch(error => {
        console.error("Error fetching dog breed data:",error);
    })

//============= Displaying Breed Info on Web ===============

//function displays dog breeds
function displayDogs(dogs){
    const container = document.getElementById('dogContainer');

    dogs.forEach(dog => {
    // Create a new card for each breed
    const card = document.createElement('div');
    card.classList.add('dog-card');

    // Add image (if available)
    const img = document.createElement('img');
    img.src = dog.image?.url || 'https://via.placeholder.com/200x150?text=No+Image';
    img.alt = dog.name;

    // Add breed name
    const name = document.createElement('h3');
    name.textContent = dog.name;

    // Add elements to the card
    card.appendChild(img);
    card.appendChild(name);

    // Add card to the container
    container.appendChild(card);
  });
}