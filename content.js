// Get all elements with the "display:none" property
const hiddenElements = document.querySelectorAll("[style*='display:none']");

// Loop through each hidden element and remove its "display:none" property
hiddenElements.forEach(function(element) {
  element.style.display = "";
});

