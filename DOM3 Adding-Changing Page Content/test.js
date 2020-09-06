const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText += ' New Text'

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' New Text'
});

const mem = document.querySelector('.members');
mem.innerHTML += '<h1>This div contains Ninjas name:</h1>';

const people = ['Ninja','Mario','Luigi','Yoshi','Lyci','Ching-lee'];

people.forEach(person => {
    mem.innerHTML += `<p>${person}</p>`;
});