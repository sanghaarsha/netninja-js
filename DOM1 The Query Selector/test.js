//selects query with first p tag
const firstP = document.querySelector('p');
console.log(firstP);

//Queryselector all

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

paras.forEach(ele =>{ console.log(ele)});
errors.forEach(ele => { console.log(ele) });