document.addEventListener('DOMContentLoaded', () => {
    const worksGrid = document.getElementById('works-grid');

    // Fetch past works from the JSON file
    fetch('../data/pastworks.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch past works.');
        }
        return response.json();
      })
      .then(data => {
        data.forEach(work => {
          const card = document.createElement('div');
          card.className = 'card';

          card.innerHTML = `
            <img src="${work.image}" alt="${work.title}">
            <h3 class="card-title">${work.title}</h3>
            <p class="card-description">${work.description}</p>
          `;

          worksGrid.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching past works:', error);
      });
  });