//show body
const body = document.querySelector('body');
body.style.opacity = 1;
//function random
const random = (min,max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}
//random nums for color
let randomNumOne = random(0,255);
let randomNumTwo = random(0,255);
let randomNumThree = random(0,255);
//random colors
//basic
let randomColor = `rgb(${randomNumOne},${randomNumTwo},${randomNumThree})`;
//light
let lightRandomColor = `rgb(${randomNumOne + 100},${randomNumTwo + 100},${randomNumThree + 100})`;
//dark
let dakrRandomColor = `rgb(${randomNumOne - 200},${randomNumTwo - 200},${randomNumThree - 200})`;
//change menu's background color and shadow
const header = document.querySelector('header');
const language = document.querySelector('.language');

//
const contacts = document.querySelector('.contacts');

//if hover on this elem the value is assigned
	header.onmouseover = (e) =>{
		if (e.target.parentNode.localName == "div") {
				e.target.style.backgroundColor = randomColor;
				e.target.style.boxShadow =  `inset 2px 2px 5px ${lightRandomColor}, inset -2px -2px 5px ${dakrRandomColor}`;
				e.target.style.color = '#000';

				e.target.style.textDecoration = 'none';
			}
		if (e.target.classList[0] == "language") {
				language.style.backgroundColor = randomColor;
				language.style.boxShadow =  `inset 2px 2px 5px ${lightRandomColor}, inset -2px -2px 5px ${dakrRandomColor}`;
				language.style.color = '#000';
			}
		}
	//the value is being deleted	
	header.onmouseout = (e) =>{

				e.target.style.backgroundColor = '#000';
				e.target.style.boxShadow =  `none`;
				e.target.style.color = randomColor;

				contacts.style.textDecoration = 'underline';

				language.style.backgroundColor = '#000';
				language.style.boxShadow =  `none`;
				language.style.color = randomColor;
	
	}
//receiving my data
const writeVk = document.querySelector('.writeVk'); 
const writeMail = document.querySelector('.writeMail');

//show my data
const vk = document.querySelector('.vk'); 
vk.onclick = () => {
	window.open('https://vk.com/izura1319','_blank');
}
const mail = document.querySelector('.mail');
mail.onclick = () => {
	prompt('', 'uchihaizura1219@gmail.com');
}
//changing my data's color
vk.style.color = randomColor;
mail.style.color = randomColor;

setInterval( () => {
	writeVk.style.color = randomColor;
	writeMail.style.color = randomColor;

	vk.style.color = 'white';
	mail.style.color = 'white';

	setTimeout(() => {
		writeVk.style.color = 'white';
		writeMail.style.color = 'white';

		vk.style.color = randomColor;
		mail.style.color = randomColor;
	},1000);
}, 2000);
//trip to page
const whoAmI = document.querySelector('.whoAmI');
	whoAmI.onclick = () => {
			window.location.href ='../index.html';
		}
const myWorks = document.querySelector('.myWorks');
	myWorks.onclick = () => {
			window.location.href ='../page_my_works/index.html';
		}
//translate

language.onclick = () =>{
	if (language.textContent == 'EN') {
		language.textContent = 'RU';

		whoAmI.textContent = 'Кто я?';
		myWorks.textContent = 'Мои работы';
		contacts.textContent = 'Контакты';

		vk.textContent = 'ВК';
		mail.textContent = 'почту';

		writeVk.textContent = 'напишите в ';
		writeMail.textContent = 'или на ';
	}
	else{
		language.textContent = 'EN';

		whoAmI.textContent = 'Who am I?';
		myWorks.textContent = 'My works';
		contacts.textContent = 'Contacts';

		vk.textContent = 'VK';
		mail.textContent = 'mail';

		writeVk.textContent = 'write to the ';
		writeMail.textContent = 'or to the ';
	}
}