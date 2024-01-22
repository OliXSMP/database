const database = [
    { name: 'Thomas Donovan', age: 15, location: 'Peacehaven', bio: 'N/A', image: 'thomasdonovan.jpg' },
    { name: 'Ethan Girigis', age: 14, location: 'Brighton', bio: 'N/A', image: 'ethangirgis.jpg' },
    { name: 'Mantas ZubruS', age: 14, location: 'Hove', bio: 'N/A', image: 'mantaszubrus.jpg' },
    { name: 'Oliwier Szyszka', age: 15, location: 'Portslade', bio: 'N/A', image: 'oliwierszyszka.jpg' },
    { name: 'William Luff', age: 15, location: 'Brighton', bio: 'N/A', image: 'williamluff.jpg' },
    { name: 'Kacper Sz', age: 14, location: 'Brighton', bio: 'N/A', image: 'kacpersz.jpg' },
    { name: 'Jokubas Jankevicius', age: 14, location: 'Brighton', bio: 'N/A', image: 'jokubasjankevicius.jpg' },
    { name: 'Philopateer Kaoud', age: 15, location: 'N/A', bio: 'N/A', image: 'philopateerkaoud.jpg' },
    { name: 'Komas Ako', age: '14 or 15', location: 'N/A', bio: 'N/A', image: 'komasako.jpg' },
    { name: 'Joshua Stevens', age: '14', location: 'Saltdean', bio: 'N/A', image: 'komasako.jpg' },
];

function searchNames() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if (searchInput.length < 3) {
        // Display a message or do nothing when fewer than 2 letters are typed
        return;
    }

    const filteredNames = database.filter(entry => entry.name.toLowerCase().includes(searchInput));

    filteredNames.forEach(entry => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = entry.image;
        card.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = entry.name;
        card.appendChild(name);

        const age = document.createElement('p');
        age.textContent = `Age: ${entry.age}`;
        card.appendChild(age);

        const location = document.createElement('p');
        location.textContent = `Location: ${entry.location}`;
        card.appendChild(location);

        const bio = document.createElement('p');
        bio.textContent = entry.bio;
        card.appendChild(bio);

        resultsContainer.appendChild(card);
    });
}
