// gets current date
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// last modified date

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

// Hamberbur menu for mobile

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Temple array data

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      alt: "Aba Nigeria Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      alt: "Manti Utah Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      alt: "Payson Utah Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      alt: "Yigo Guam Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      alt: "Washington D.C. Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      alt: "Lima Perú Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      alt: "Mexico City Mexico Temple",
      imageWidth: 400,
      imageHeight: 250
    },
    {
        templeName: "Saratoga Springs Utah",
        location: "Saratoga Springs, Utah, United States",
        dedicated: "2023, August, 13",
        area: 97836,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872-main.jpg",
        alt: "Saratoga Springs Utah Temple",
        imageWidth: 400,
        imageHeight: 250
    },
    {
        templeName: "Red Cliffs Utah",
        location: "St. George, Utah, United States",
        dedicated: "2024, March, 24",
        area: 96277,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44958-main.jpg",
        alt:"Red Cliffs Utah Temple",
        imageWidth: 400,
        imageHeight: 250
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 96277,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-2298-thumb.jpg",
        alt: "Cedar City Utah Temple",
        imageWidth: 400,
        imageHeight: 250
    }
  ];

//   Function to create Temple cards

const cardContainer = document.getElementById("temple-card-container");
const filterHome = document.getElementById("all-temples");
const filterOld = document.getElementById("old-temples");
const filterNew = document.getElementById("new-temples");
const filterLarge = document.getElementById("large-temples");
const filterSmall = document.getElementById("small-temples");

function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const cardImage = document.createElement("img");
    cardImage.classList.add("temple-image");
    cardImage.src = data.imageUrl;
    cardImage.alt = data.alt;
    cardImage.loading = "lazy";
    cardImage.width = data.imageWidth;
    cardImage.height = data.imageHeight;

    card.appendChild(cardImage);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = data.templeName;
    card.appendChild(cardHeader);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const location = document.createElement("p");
    location.textContent = `Location: ${data.location}`;
    cardBody.appendChild(location);

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${data.dedicated}`;
    cardBody.appendChild(dedicated);

    const area = document.createElement("p");
    area.textContent = `Area: ${data.area} sq ft`;
    cardBody.appendChild(area);

    card.appendChild(cardBody);

    return card;
}

// temples.forEach(data => {
//     const cardElement = createCard(data);
//     cardContainer.appendChild(cardElement);
// });

// Function to render the temples

function renderTemples(templesArray) {
    cardContainer.innerHTML = "";
    templesArray.forEach(temple => {
        const cardElement = createCard(temple);
        cardContainer.appendChild(cardElement)
    })
}

renderTemples(temples);

filterHome.addEventListener("click", function(e) {
    e.preventDefault();
    renderTemples(temples);
});

filterOld.addEventListener("click", function(e) {
    e.preventDefault();
    const filteredTemplesOld = temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear < 1900;
    })
    renderTemples(filteredTemplesOld)
});

filterNew.addEventListener("click", function(e) {
    e.preventDefault();
    const filteredTemplesNew = temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear > 2000;
    })
    renderTemples(filteredTemplesNew)
});

filterLarge.addEventListener("click", function(e) {
    e.preventDefault();
    const filteredTemplesLarge = temples.filter(temple => temple.area > 90000);
    renderTemples(filteredTemplesLarge);
});

filterSmall.addEventListener("click", function(e) {
    e.preventDefault();
    const filteredTemplesSmall = temples.filter(temple => temple.area < 10000);
    renderTemples(filteredTemplesSmall);
});
