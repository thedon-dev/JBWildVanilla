document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
  
    const loadingMessage = `
      <div class="text-center py-20">
        <p class="text-lg text-gray-600">Loading data...</p>
      </div>
    `;
    root.innerHTML = loadingMessage;
  
    // Fetch data from the JSON file
    fetch("../data/whatwedo.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        return response.json();
      })
      .then(data => {
        const activities = data;
  
        const activitiesSection = `
          
        `;
  
        // Inject the header and activities section into the root element
        root.innerHTML = header + activitiesSection;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        root.innerHTML = `
          <div class="text-center py-20">
            <p class="text-lg text-gray-600">Failed to load data. Please try again later.</p>
          </div>
        `;
      });
  });
  