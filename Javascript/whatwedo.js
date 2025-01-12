document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");
  
    const loadingMessage = `
      <div class="">
        <header>
          <h1 class="text-4xl md:text-6xl font-bold">What we do</h1>
          <p class="mt-4 text-lg md:text-xl">Dedicated to preserving wildlife and creating sustainable ecosystems.</p>
        </header>
        <section class="py-16 px-6 bg-gray-100">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p class="text-gray-600 text-lg leading-relaxed">Loading...</p>
          </div>
        </section>
      </div>
    `;
    root.innerHTML = loadingMessage;
  
    fetch("../data/pastworks.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch past works.");
        }
        return response.json();
      })
      .then(data => {
        const pastWorks = data;
  
        const aboutSection = `
          <section class="py-16 px-6 bg-gray-100">
            <div class="max-w-6xl mx-auto text-center">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                JB Wildlife is a global wildlife preservation organization committed
                to protecting endangered species and their habitats. Since our
                founding, we have been at the forefront of conservation efforts,
                collaborating with communities, researchers, and governments to
                create a lasting impact.
              </p>
              <p class="text-gray-600 text-lg mt-4 leading-relaxed">
                Our mission is to ensure that future generations can experience the
                beauty of wildlife by conserving nature and promoting awareness.
              </p>
            </div>
          </section>
        `;
  
        const pastWorksSection = `
          <section class="py-16 px-6 bg-white">
            <div class="max-w-6xl mx-auto">
              <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">Our Past Works</h2>
              <div  style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center;">
                ${pastWorks.map(work => `
                  <div key="${work.id}" class="bg-gray-100 shadow-lg rounded-lg p-6" style="width: 500px">
                    <img src="${work.image}" alt="${work.title}" class="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 class="text-xl font-bold text-green-700 mb-2" style="padding: 10px 30px;">${work.title}</h3>
                    <p class="text-gray-600"  style="padding: 10px 30px;">${work.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
  
        const header = `
          <header class="bg-green-700 text-white py-32 text-center px-6">
            <h1 class="text-4xl md:text-6xl font-bold">About JB Wildlife</h1>
            <p class="mt-4 text-lg md:text-xl">Dedicated to preserving wildlife and creating sustainable ecosystems.</p>
          </header>
        `;
  
        root.innerHTML = header + aboutSection + pastWorksSection;
      })
      .catch(error => {
        console.error("Error fetching past works:", error);
        root.innerHTML = `
          <div class="pb-10 lg:pb-0">
            <header class="bg-green-700 text-white py-32 text-center px-6">
              <h1 class="text-4xl md:text-6xl font-bold">About JB Wildlife</h1>
              <p class="mt-4 text-lg md:text-xl">Dedicated to preserving wildlife and creating sustainable ecosystems.</p>
            </header>
            <section class="py-16 px-6 bg-gray-100">
              <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
                <p class="text-gray-600 text-lg leading-relaxed">Failed to load past works. Please try again later.</p>
              </div>
            </section>
          </div>
        `;
      });
  });
  