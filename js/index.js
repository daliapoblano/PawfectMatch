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
    })
    // This will run if anything goes wrong 
    .catch(error => {
        console.error("Error fetching dog breed data:",error);
    })