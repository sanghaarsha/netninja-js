const content = document.querySelector("p");

console.log(content.classList);

content.classList.add("error");
content.classList.remove("error");
content.classList.add("success");

if (content.innerText.includes("hello")) {
    console.log("Includes hello");
}
else{
    console.log('Does not have hello');
}