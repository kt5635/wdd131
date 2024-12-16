// Get the "Menu" text and the menu
const menuText = document.getElementById('menu-text');
const menu = document.getElementById('menu');

menuText.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// gets current date
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// last modified date

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

// tutorial array data

const tutorial = [
    {
        flowerName: "Kanzashi",
        description: "This type of ribbon flower is called Kanzashi. Usually made out of double sided satin ribbon.",
        difficultyLevel: "Medium",
        image: "images/kanzashi-card.webp",
        alt: "Ribbon Flower",
        tutorialLink: "kanzashi.html"
    },
    {
        flowerName: "Poppy",
        description: "This Ribbon flower closely resembles a flower called a Poppy. This is an easy flower for beginners.",
        difficultyLevel: "Easy",
        image: "images/simple-card.webp",
        alt: "Ribbon Flower",
        tutorialLink: "poppy.html"
    }
];

function displayTutorials() {
    const container =document.querySelector('.tutorial-card-container');

    tutorial.forEach(item => {
        const tutorialCard = document.createElement('div');
        tutorialCard.classList.add('tutorial-card');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt =item.alt;
        image.loading = 'lazy';

        const title = document.createElement('h2');
        title.textContent = item.flowerName;

        const description = document.createElement('p');
        description.textContent = item.description;

        const difficulty = document.createElement('p');
        difficulty.classList.add('difficulty'); 
        difficulty.textContent = `Difficulty: ${item.difficultyLevel}`;

        const link = document.createElement('a');
        link.href = item.tutorialLink; 
        link.textContent = "View Tutorial";

        tutorialCard.appendChild(image);
        tutorialCard.appendChild(title);
        tutorialCard.appendChild(description);
        tutorialCard.appendChild(difficulty);
        tutorialCard.appendChild(link);

        container.appendChild(tutorialCard);
        
    });
}

window.onload = displayTutorials;

// contact form pop up

function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Store name and email in localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
}

function loadFormData() {
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedName) {
        document.getElementById('name').value = savedName;
    }
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
}

window.addEventListener('load', loadFormData);

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('thanksMessage').style.display = "block";

    document.getElementById('contactForm').reset();
});

document.querySelector('.close').addEventListener('click', function(){
    document.getElementById('thanksMessage').style.display = 'none';
})

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('thanksMessage')) {
        document.getElementById('thanksMessage').style.display = "none";
    }
});