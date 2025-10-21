//============= Displaying Breed Info on Web ===============
//function displays dog breeds
function displayCats(cats) {
    const container = document.getElementById('catContainer');

    cats.forEach(cat => {
        // Create a new card for each breed
        const card = document.createElement('div');
        card.classList.add('cat-card');

        // Add image (if available)
        const img = document.createElement('img');
        img.src = cat.image?.url || 'https://via.placeholder.com/200x150?text=No+Image';
        img.alt = cat.name; L.CX;

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
