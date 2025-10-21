//============= Dog Breed API Call   ===============

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
    
    // Add temperament information
    const fact = document.createElement('p');
    fact.textContent = dog.temperament 
      ? `Temperament: ${dog.temperament}`
      : 'No temperament info available.';


    // Add life span information
    const life = document.createElement('p');
    life.textContent = `Life Span: ${dog.life_span || 'Unknown'}`;

    // Add breeding information
    const bredFor = document.createElement('p');
    bredFor.textContent = dog.bred_for 
      ? `Bred For: ${dog.bred_for}`
      : 'Purpose not listed.';

    // Add elements to the card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(fact);
    card.appendChild(life);
    card.appendChild(bredFor);

    // Add card to the container
    container.appendChild(card);
  });
}


//================ CAT API =================
const catApiUrl = 'https://api.thecatapi.com/v1/breeds'; // Endpoint. Will return cat breed information
const catKey ='live_pxyuxFzS3oDxUMmWYPtw9bLUsuqCuGwj1aBb5hC3EYMq91zqMarxwrZIJMi2VxT6';

// Making API call to TheCat API for cat breed information
fetch(catApiUrl, {
    headers: {
        'x-api-key': catKey
    }
})
    .then(response => {
        // If we get an error, throw this message to the user instead of parsing
        if(!response.ok){
            throw new Error('Failed to fetch cat data. Please try again later.');
        }
        // Parse json
        return response.json(); 
    })
    // Storing all dog info from the API in the data var
    .then(data2 => {
        console.log(data2);
        displayCats(data2); // displays the data on webpage
    })
    // This will run if anything goes wrong 
    .catch(error => {
        console.error("Error fetching cat breed data:",error);
    })

//============= Displaying Breed Info on Web ===============

//function displays dog breeds
function displayCats(cats){
    const container = document.getElementById('catContainer');

    cats.forEach(cat => {
    // Create a new card for each breed
    const card = document.createElement('div');
    card.classList.add('cat-card');

    // Add image (if available)
    const img = document.createElement('img');
    img.src = cat.image?.url || 'https://via.placeholder.com/200x150?text=No+Image';
    img.alt = cat.name;

    // Add breed name
    const name = document.createElement('h3');
    name.textContent = cat.name;
    
    // Add temperament information
    const fact = document.createElement('p');
    fact.textContent = cat.temperament 
      ? `Temperament: ${cat.temperament}`
      : 'No temperament info available.';


    // Add life span information
    const life = document.createElement('p');
    life.textContent = `Life Span: ${cat.life_span || 'Unknown'}`;

    // Add breeding information
    const bredFor = document.createElement('p');
    bredFor.textContent = cat.bred_for 
      ? `Bred For: ${cat.bred_for}`
      : 'Purpose not listed.';

    // Add elements to the card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(fact);
    card.appendChild(life);
    card.appendChild(bredFor);

    // Add card to the container
    container.appendChild(card);
  });
}


