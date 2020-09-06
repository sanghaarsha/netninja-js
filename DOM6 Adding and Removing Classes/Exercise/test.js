const paras = document.querySelectorAll("p");

// innerText :: can not read hidden text i.e display = none
// textContent :: can read hidden text

paras.forEach((para) => {
    if (para.textContent.includes("success")) {
        para.classList.add("success");
    }
    if (para.textContent.includes("error")) {
        para.classList.add("error");
    }
});

const title = document.querySelector(".title");

title.classList.toggle("test");
//adds the class test
title.classList.toggle("test");
// toggling two times removes the class
