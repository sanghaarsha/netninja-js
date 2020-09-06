const article = document.querySelector("article");

console.log(article.children);

//converting in an array to apply forEach
const articleArray = Array.from(article.children);

articleArray.forEach((member) => {
    member.classList.add("article-element");
});

// seeing parent elements and sibling elements
const title = document.querySelector("h2");
console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
