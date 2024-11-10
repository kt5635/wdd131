


// Get the last modified date of the document
var lastModifiedDate = document.lastModified;

// Optionally, format it (e.g., to a human-readable format)
var formattedDate = new Date(lastModifiedDate);

// Display it in an HTML element
document.getElementById("lastModified").innerHTML = "Last modified on: " + formattedDate.toLocaleString();
