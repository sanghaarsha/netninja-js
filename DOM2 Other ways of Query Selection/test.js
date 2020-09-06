// get element by ID

const title = document.getElementById("page-title");
console.log(title);

// get element by class name

const error = document.getElementsByClassName("error");
console.log(error);
console.log(error[0]);

// get element by tag-name

const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[0]);

// Note: These way to select query do not support forEach method !!
