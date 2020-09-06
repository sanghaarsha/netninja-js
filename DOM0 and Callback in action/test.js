const ul = document.querySelector('.people');

const people = ['Mario','Ninja','Shaun','Simmy','Chun-li'];

html = ``;

people.forEach((person,index)=>{
	//Create an HTML template for each person
	html += `<li>${index}. ${person}</li>`;
});

ul.innerHTML = html;