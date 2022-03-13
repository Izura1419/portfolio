//adaptation position circles
if (window.matchMedia("(max-width: 1024px)").matches) {
	//about canvas show
	positionX = 50;
	positionXVP = 250;
	//
}
if (window.matchMedia("(max-width: 640px)").matches) {
	//about canvas show
	canvas.width = innerWidth - 350;
	canvas.height = innerHeight - 900;

	positionX = 0;
	positionXVP = -5;
	intCir = 30;
	intDraw = 100;
	vp = 'Vlad Prikhodko';
	//field for drawing
	canvasFD.remove();

}

// menu adaptation
// adding the necessary variables
const menu = document.querySelector('.menu');
const menuAdap = document.querySelector('.menuAdap');
const cross = document.querySelector('.cross');

//at this width, objects are moved to another location
//elements in menu adaptive
let elInMenuAdap = [whoAmI,myWorks,contacts,language,cross];

let clickOnMenuAdap = () => {
	menuAdap.style.cursor = 'default';
	whoAmI.style.marginTop = '50px';

	for (let i = 2; i <= 14; i++) {
		body.children[i].style.display = 'none';
	}

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
			e.target.style.backgroundColor = middleColor;
			e.target.style.boxShadow =  `inset 2px 2px 5px ${colorCircle}, inset -2px -2px 5px ${firstColor}`;
			e.target.style.color = '#000';

			e.target.style.textDecoration = 'none';
		}

		elInMenuAdap[i].onmouseout = (e) =>{
			e.target.style.backgroundColor = '#000';
			e.target.style.boxShadow =  `none`;
			e.target.style.color = '#fff';

			whoAmI.style.textDecoration = 'underline';
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
	menuAdap.style.color = '#fff';

	menuAdap.onclick = () =>{
		clickOnMenuAdap();
	}
}
//closing menu adap
let clickOnCross = () => {
	event.stopPropagation();

	menuAdap.style.cursor = 'pointer';

	menuAdap.style.width = '50px';
	menuAdap.style.height = '60px';
	menuAdap.style.top = '20px';
	menuAdap.style.left = '40px';

	for (let i = 2; i <= 14; i++) {
		body.children[i].style.display = 'inline-block';
	}

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
