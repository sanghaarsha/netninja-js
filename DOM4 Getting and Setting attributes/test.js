const link = document.querySelector("a");

console.log(link.getAttribute("href"));
console.log(link.innerText);

link.setAttribute("href", "Https://www.youtube.com");

console.log(link.getAttribute("href"));
link.innerText = "Link to Youtube.";
console.log(link.innerText);

const msg = document.querySelector("p");
let choice = prompt("enter a yes or no");

if (choice === "yes") {
    msg.setAttribute("class", "success");
    msg.setAttribute("style", "color:green;");
    msg.innerText = "This is success message.";

    console.log(msg.innerText);
    console.log(msg.getAttribute("class"));
} else {
    msg.setAttribute("style", "color:red;");

    console.log(msg.innerText);
    console.log(msg.getAttribute("class"));
}
