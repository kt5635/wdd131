// gets current date
const d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").innerHTML = year;

// last modified date

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;

// function to callculate windcill
// Pre-set variables for temperature (°F) and wind speed (mph)
const temperatureF = 50;  // in Fahrenheit
const windSpeedMPH = 12;  // in miles per hour

// Wind Chill Calculation Function (Fahrenheit)
function calculateWindChill() {
    // Ensure wind chill is only calculated when temperature is below 50°F and wind speed is greater than 3 mph
    let windChill;
    if (temperatureF > 50 || windSpeedMPH <= 3) {
        windChill = temperatureF;  // Wind chill is not applicable
    } else {
        windChill = 35.74 + (0.6215 * temperatureF) - (35.75 * Math.pow(windSpeedMPH, 0.16)) + (0.4275 * temperatureF * Math.pow(windSpeedMPH, 0.16));
    }

    // Display the result in the webpage
    document.getElementById('result').innerText = windChill.toFixed(2) + " °F";
}

// Call the function immediately when the page loads
window.onload = calculateWindChill;