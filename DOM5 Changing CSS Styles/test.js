const title = document.querySelector("h1");

// Set attribute removes previous styling and over-writes with given styling
// title.setAttribute("style", "margin: 100px;");

// To keep the original styling and add new styling

console.log(title.style);
console.log(title.style.color);

title.style.margin = "100px";
title.style.color = "Crimson";
title.style.fontSize = "60px";

console.log(title.style.color);
console.log(title.style.margin);
console.log(title.style.fontSize);
