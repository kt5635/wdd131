// gets current date
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// last modified date

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

// Product array

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//   option function

  function populateProductList() {
    const selectElement = document.getElementById('productList');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
  }

  window.onload = populateProductList;

//   review counter

function loadReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount ===null) {
        reviewCount = 0;
    }

    document.getElementById('reviewCount').textContent = `Number of reviews completed: ${reviewCount}`;

    document.getElementById('reviewFOrm').reset();
}

window.onload = function() {
    loadReviewCounter();

    document.getElementById('reviewForm').addEventListener('submit', handleFormSubmission);
};