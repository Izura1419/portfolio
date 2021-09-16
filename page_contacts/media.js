// adding the necessary variables
const gifGB = document.querySelector('.gifGB');
const menu = document.querySelector('.menu');
const menuAdap = document.querySelector('.menuAdap');
const cross = document.querySelector('.cross');

//at this width, objects are moved to another location
//elements in menu adaptive
let elInMenuAdap = [whoAmI,myWorks,contacts,language,cross];

let clickOnMenuAdap = () => {
	menuAdap.style.cursor = 'default';

	for (let i = 0; i < 3; i++) {
		menuAdap.children[i].style.display = 'none';
	}

	menuAdap.style.width = '400px';
	menuAdap.style.height = '400px';
	menuAdap.style.top = '100px';
	menuAdap.style.left = '40px';

	for (let i = 0; i <= 4; i++) {
		menuAdap.appendChild(elInMenuAdap[i]);

		gsap.to(elInMenuAdap[i],{fontSize : '1.5em',
			cursor : 'pointer',
			marginBottom : '20px',
			transition : 'all .5s ease',
			padding : '10px',
			borderRadius : '30px'
		});

		elInMenuAdap[i].onmouseover = (e) =>{
			e.target.style.backgroundColor = randomColor;
			e.target.style.boxShadow =  `inset 2px 2px 5px ${lightRandomColor}, inset -2px -2px 5px ${dakrRandomColor}`;
			e.target.style.color = '#000';

			e.target.style.textDecoration = 'none';
		}

		elInMenuAdap[i].onmouseout = (e) =>{
			e.target.style.backgroundColor = '#000';
			e.target.style.boxShadow =  `none`;
			e.target.style.color = '#fff';

			if (e.target.classList[0] == 'contacts') {
				e.target.style.textDecoration = 'underline';
			}
		}

		if (i == 2) {
			contacts.style.textDecoration = 'underline';
		}

		if (i == 4) {
			gsap.to(cross,{display : 'inline-block',
			backgroundColor : '#000',
			padding : '0px'
		});
		}
	}
}

if (window.matchMedia("(max-width: 480px)").matches) {
	menu.style.display = 'none';

	menuAdap.onclick = () =>{
		clickOnMenuAdap();
	}
}
//closing menu adap
let clickOnCross = () => {
	event.stopPropagation();

	menuAdap.style.cursor = 'pointer';

	menuAdap.style.width = '50px';
	menuAdap.style.height = '50px';
	menuAdap.style.top = '20px';
	menuAdap.style.left = '40px';

	for (let i = 0; i < 3; i++) {
		menuAdap.children[i].style.display = 'inline-block';
	}
	for (let i = 0; i <= 2; i++) {
		menu.appendChild(elInMenuAdap[i]);
	}

	document.querySelector('header').appendChild(language);
	cross.style.display = 'none';	
}

cross.onclick = () =>{
	clickOnCross();
}




if (window.matchMedia("(max-width: 450px)").matches) {
	menuAdap.onclick = () =>{
		clickOnMenuAdap();
		menuAdap.style.top = '70px';
		menuAdap.style.left = '20px';
	}
	cross.onclick = () =>{
		clickOnCross();
	}
}

if (window.matchMedia("(max-width: 430px)").matches) {
	menuAdap.onclick = () =>{
		clickOnMenuAdap();

		menuAdap.style.left = '0px';
	}
	cross.onclick = () =>{
		clickOnCross();
	}
}


if (window.matchMedia("(max-width: 380px)").matches) {
	menuAdap.onclick = () =>{
		clickOnMenuAdap();

		menuAdap.style.width = '300px';
	}
	cross.onclick = () =>{
		clickOnCross();
	}
}


if (window.matchMedia("(max-width: 335px)").matches) {
	menuAdap.onclick = () =>{
		clickOnMenuAdap();

		menuAdap.style.width = '350px';
		menuAdap.style.height = '400px';
		menuAdap.style.top = '70px';
		menuAdap.style.left = '0px';
	}
	cross.onclick = () =>{
		clickOnCross();
	}
}
if (window.matchMedia("(max-width: 310px)").matches) {
	menuAdap.onclick = () =>{
		clickOnMenuAdap();

		menuAdap.style.width = '300px';
		menuAdap.style.height = '400px';
		menuAdap.style.top = '70px';
		menuAdap.style.left = '0px';
	}
	cross.onclick = () =>{
		clickOnCross();
	}
}