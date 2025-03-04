async function fetchData() {
  try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      displayData(data.products);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function displayData(data){
  const container = document.getElementById('container');
  container.innerHTML = data.map(product => {
      const stars = Math.round(product.rating);
      const starIcons = '&#9733;'.repeat(stars) + '&#9734;'.repeat(5 - stars);
      
      return `<div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-5 flex flex-col h-full">
          <img class="w-full h-64 object-cover" src="${product.thumbnail}" alt="${product.title}">
          <div class="px-4 py-4 flex flex-col flex-grow">
            <h2 class="text-xl font-bold text-gray-900 line-clamp-2 h-12 overflow-hidden hover:overflow-hidden">${product.title}</h2>
            <p class="text-gray-600 text-sm mt-2 line-clamp-3 h-16 overflow-hidden hover:overflow-hidden">${product.description}</p>
            <p class="text-gray-700 font-semibold mt-2">Category: <span class="text-gray-500">${product.category}</span></p>
            <p class="text-xl font-semibold text-green-600 mt-2">$${product.price}</p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-500">${starIcons}</span>
              <span class="text-gray-600 text-sm ml-2">(${product.rating} out of ${product.stock} available)</span>
            </div>
            <button class="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-300">Add to Cart</button>
          </div>
        </div>`;
  }).join('');
}

fetchData();