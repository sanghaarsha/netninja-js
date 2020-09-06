const ul = document.querySelector("ul");
//  remove an element = ul.remove()
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New todo item";
    ul.append(li);
});

ul.addEventListener("click", (e) => {
    // To only remove element with li not whole ul list
    if (e.target.tagName !== "UL") {
        console.log(e.target);
        e.target.remove();
    }
});

// Event Bubling means event alaways start from child elements
// and start to travel to parent elements
