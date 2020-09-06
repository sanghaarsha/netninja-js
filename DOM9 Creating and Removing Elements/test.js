const ul = document.querySelector("ul");
//  remove an element = ul.remove()
const button = document.querySelector("button");

const items = document.querySelectorAll("li");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New todo item";
    ul.append(li);
});

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.log(e.target);
        e.target.remove();
    });
});
