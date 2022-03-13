//!canvas screen saver
const canvas = document.querySelector('.circlesAndName');
const ctx = canvas.getContext('2d');
// get width and height screen
canvas.width = innerWidth;
canvas.height = innerHeight - 100;

ctx.globalAlpha = 0;
//function random
const random = (min,max) => {return Math.floor(Math.random() * (max - min + 1)) + min;}
//materisals for interval
//random nums for color
let randomColorOne = random(0,155);
let randomColorTwo = random(0,155);
let randomColorThree = random(0,155);
//random color
let colorCircle = middleColor = firstColor = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
// start position animation
let positionX = 200;
let positionY = 300;
//change menu's background color and shadow
const header = document.querySelector('header');

//
const whoAmI = document.querySelector('.whoAmI');

const changeBGCMenu = () => {
	//if hover on this elem the value is assigned
	header.onmouseover = (e) =>{
		if (e.target.parentNode.localName == "div") {

				e.target.style.backgroundColor = middleColor;
				e.target.style.boxShadow =  `inset 2px 2px 5px ${colorCircle}, inset -2px -2px 5px ${firstColor}`;
				e.target.style.color = '#000';

				e.target.style.textDecoration = 'none';
			}
		if (e.target.classList[0] == "language") {

				language.style.backgroundColor = middleColor;
				language.style.boxShadow =  `inset 2px 2px 5px ${colorCircle}, inset -2px -2px 5px ${firstColor}`;
				language.style.color = '#000';
			}
		}
	//the value is being deleted
	header.onmouseout = (e) =>{

				e.target.style.backgroundColor = '#000';
				e.target.style.boxShadow =  `none`;
				e.target.style.color = middleColor;

				whoAmI.style.textDecoration = 'underline';

				language.style.backgroundColor = '#000';
				language.style.boxShadow =  `none`;
				language.style.color = middleColor;

	}
}
//!interval
//make positionXVP (Vlad Prikhodko) for adaptation
let positionXVP = 500;
//middle value for size and for adaptive
let mvs = 5;
//its for control position all construction
let sumPosY = 0;
// interval between circles
let intCir = 30;
// duration and interval between drawing
// adaptive was made for more correctly work
let durDraw = 2000;
if (window.matchMedia("(min-width: 1024px)").matches) {
	durDraw = 1000;
}
let intDraw = 50;
//my name
let vp = 'Vladislav Prikhodko';
let fontVP = "48px consolas";

let showCircles = setInterval(() => {
	//change color
	randomColorOne += random(0,20);
	randomColorTwo += random(0,20);
	randomColorThree += random(0,20);

	colorCircle = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;

	ctx.beginPath();
	ctx.fillStyle = colorCircle;
//get size circle
	let sizeCircle = random(mvs * 2,mvs * 10);
	ctx.arc(positionX,positionY,sizeCircle,0,Math.PI*2,true);
	ctx.fill();
//change position and her control
	sumPosY += positionY;
	positionX += intCir;
//draw name
	let minusOrPlus = random(0,1);
	if (minusOrPlus == 0 || sumPosY >= 5500){
		positionY -= intCir;

		ctx.font = fontVP;
		ctx.fillStyle = colorCircle;
	  	ctx.fillText(vp, positionXVP, positionY - 50);
	}
	else{
		positionY += intCir;

		ctx.font = fontVP;
		ctx.fillStyle = colorCircle;
	  	ctx.fillText(vp, positionXVP, positionY + 50);
	}
//opacity
	ctx.globalAlpha += 0.1;

},intDraw);
//get body in html
const body = document.querySelector('body');
//show body
setTimeout(() => {
	body.style.opacity = 1;

	canvasFD.style.boxShadow = `inset 12px 12px 1px ${middleColor}, inset -12px -12px 1px ${colorCircle}`;
},100);
//setTineout's, clearInteval and get middle color
setTimeout(() => {
	middleColor = colorCircle;

	body.style.color = middleColor;
	body.style.opacity = 1;
},500);
setTimeout(() => {
	clearInterval(showCircles);

	changeBGCMenu();

},durDraw);

//my age
const myAge = document.querySelector('.myAge');

let now = new Date().getTime();
let brthd = new Date(2005,11,3).getTime();

let years = new Date(now - brthd);

myAge.textContent = Math.abs(years.getUTCFullYear() - 1970);

//!canvas field for drawing
const canvasFD = document.querySelector('.fieldForDrawing');
const ctxFD = canvasFD.getContext('2d');
//canvasFD size
canvasFD.width = 500;
canvasFD.height = 400;
//text on canvasFD
	ctxFD.font = "24px consolas";
	ctxFD.fillStyle = '#fff';
	ctxFD.fillText("hover over", 190, 200);
//drawing on field
canvasFD.onmousemove = (event) => {
	//for adaptive
	let differenceWidth = 1366 - innerWidth;
	let differenceHeight = 697 - innerHeight;

	//get position cursor
	let positionCursorX = event.pageX - 809 + differenceWidth * 0.6;
	let positionCursorY = (event.pageY + differenceHeight) - 760 ;

	//color circles
	randomColorOne -= .5;
	randomColorTwo -= .5;
	randomColorThree -= .5;

	let colorCirclesFD = `rgb(${randomColorOne},${randomColorTwo},${randomColorThree})`;
	//draw circles
	ctxFD.beginPath();
	ctxFD.fillStyle = colorCirclesFD;
	ctxFD.arc(positionCursorX,positionCursorY,10,0,Math.PI*2,true);
	ctxFD.fill();
}
//!sliders

//i have several sliders and when you pull them,
//the value of the neighboring block changes to the value of the slider.

//changing the pic size with the slider
const josukeWithLap = document.querySelector('.josukeWithLap');
let valueScaleJosuke = 1;

//get sum of all values inputs
let sumValuesInputs = 0;

let getSum = () =>{
	sumValuesInputs = 0;

	for (let numBlock = 1; numBlock <= 5; numBlock++) {
		let inputFromDOM = document.querySelector(`.sliders :nth-child(${numBlock}) input`);

		sumValuesInputs += +inputFromDOM.value;
	}
}

document.addEventListener('mousemove', (e) => {
	if (e.target.classList[0] == 'slider') {
			let percentageOfStudy = e.target.previousElementSibling;

			percentageOfStudy.textContent = e.target.value + '%';

			getSum();
			josukeWithLap.style.transform = `scale(${sumValuesInputs / 400})`;
	}
})
//! 3D model from three.js and him rotation
// timeout for load middleColor
setTimeout(() => {
	const canvasZeus = document.querySelector('.zeus');

	const renderer = new THREE.WebGLRenderer({canvas: canvasZeus, alpha: true});
  renderer.setSize( window.innerWidth - 150, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 5);
  camera.position.z = 20;

  const scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(middleColor, 8);
  light.position.set(-2, 0, 20);
  scene.add(light);

  const loader = new THREE.GLTFLoader();

	if (window.matchMedia("(min-width: 1024px)").matches){
	  loader.load( 'model/zeus/scene.gltf', function ( gltf ) {
		  gltf.scene.position.set(0.5,-2.2,15.5);
		  gltf.scene.scale.set(0.4,0.31,0.4);

		  gltf.scene.rotation.y = 1.5;
		  gltf.scene.rotation.x = 0.2;

		  scene.add( gltf.scene );
		  scene.fog = new THREE.FogExp2(colorCircle, .05, .1);

		  function render(time) {
		    gltf.scene.rotation.y += 0.01;
		    renderer.render(scene, camera);

		    requestAnimationFrame(render);
		  }
		  requestAnimationFrame(render);
		});
	}
	if (window.matchMedia("(max-width: 640px)").matches){
		renderer.setSize( window.innerWidth - 100, window.innerHeight );

	  loader.load( 'model/zeus/scene.gltf', function ( gltf ) {
		  gltf.scene.position.set(0,-1.5,15.5);
		  gltf.scene.scale.set(0.3,0.2,0.3);

		  gltf.scene.rotation.y = 1.5;
		  gltf.scene.rotation.x = 0.2;

		  scene.add( gltf.scene );
		  scene.fog = new THREE.FogExp2(colorCircle, .05, .1);

		  function render(time) {
		    gltf.scene.rotation.y += 0.02;
		    renderer.render(scene, camera);

		    requestAnimationFrame(render);
		  }
		  requestAnimationFrame(render);
		});
	}
},1000);

//!scroll magic
//show aboutMe and canvas

const tl = gsap.timeline();
tl.from('.wowItsMyPhoto', {xPercent: -140})
  .from('.fieldForDrawing', {yPercent: 100, opacity: -5})
  .from('.toUp', {xPercent: 100, opacity: -5});

ScrollTrigger.create({
	animation: tl,
	trigger: 'circlesAndName',
	start: '0px 0px',
	end: '-=400',
	scrub: true,
	anticipatePin: 10
})
//sliders and josuke
const tl1 = gsap.timeline();
tl1.from('.sliders', {xPercent: -300, opacity: -5})
  .from('.mySkills', {yPercent: 200, opacity: -5})
  .from('.josukeWithLap', {xPercent: -100, opacity: -5});

ScrollTrigger.create({
	animation: tl1,
	trigger: '.circlesAndName',
	start: 'bottom',
	end: '-=200',
	scrub: true,
	anticipatePin: 10
})
//descriptions and aristotle
const tl2 = gsap.timeline();
tl2.from('.fullDescription', {opacity: -5})
  .from('.zeus', {opacity: -5})

ScrollTrigger.create({
	animation: tl2,
	trigger: '.sliders',
	start: 'top top',
	end: '-=200',
	scrub: true,
	anticipatePin: 10
})
//footer
const tl3 = gsap.timeline();
tl3.from('.footer', {yPercent: 100, opacity: -5});

ScrollTrigger.create({
	animation: tl3,
	trigger: '.fullDescription',
	start: 'top top',
	end: '-=200',
	scrub: true,
	anticipatePin: 10
})
//! text magic
const fonts = ['serif', 'sans-serif', 'cursive', 'system-ui', 'emoji', 'math', 'fangsong'];
const fullDescription = document.querySelector('.fullDescription');

setInterval(() => {
	fullDescription.style.fontFamily = fonts[random(0,6)];
	setTimeout(() => {
		fullDescription.style.fontFamily = '';
	},400)
},10000);
//!teleporn to up

//animation hover
const toUp = document.querySelector('.toUp');
toUp.style.backgroundColor = middleColor;
setTimeout(() => toUp.style.boxShadow = 'inset 0 0 8px 2px ' + colorCircle , 500);

//teleport
function teleportToUp(){
	body.scrollIntoView({block: "start", behavior: "smooth"})
}
toUp.addEventListener('click', teleportToUp);

//!translare site
const language = document.querySelector('.language');
//trip to page
const myWorks = document.querySelector('.myWorks');
	myWorks.onclick = () => {
			window.location.href ='page_my_works/index.html';
		}
const contacts = document.querySelector('.contacts');
	contacts.onclick = () => {
			window.location.href ='page_contacts/index.html';
		}
const descriptionOfMe = document.querySelector('.descriptionOfMe');

const mySkills = document.querySelector('.mySkills');

const responsibility = document.querySelector('.responsibility');

language.onclick = () =>{
	if (language.textContent == 'EN') {
		language.textContent = 'RU';

		whoAmI.textContent = 'Кто я?';
		myWorks.textContent = 'Мои работы';
		contacts.textContent = 'Контакты';

		descriptionOfMe.textContent = 'Я Владислав Приходько, 16-летний фронтенд разработчик из России';

		mySkills.textContent = 'Мои навыки';

		fullDescription.innerHTML = 'Я учусь самостоятельно, создаю сайты с 2019 года, освоил 75% HTML, 90% CSS, 55% JAVASCRIPT, 30% WORDPRESS и 65% CANVAS. <br/> Я выполнил свой первый заказ на фрилансе и похвастался перед родителям. <br/> В 2021 году я поступил в колледж, чтобы продолжить учиться на программиста.';

		responsibility.textContent = 'Моё стремление - Эйдос по Платону';
		responsibility.style.width =  '45%';

		ctxFD.clearRect(0,0, 500, 400);
		ctxFD.fillText("наведите", 190, 200);
	}
	else{
		language.textContent = 'EN';

		whoAmI.textContent = 'Who am I?';
		myWorks.textContent = 'My works';
		contacts.textContent = 'Contacts';

		descriptionOfMe.textContent = 'I'+'m Vladislav Prikhodko, a 16-y.o. frontend developer from Russia';

		mySkills.textContent = 'My skills';

		fullDescription.innerHTML = 'I' + `'` + 'm studying independently, I have been making websites since 2019, I have mastered 75% HTML, 90% CSS, 55% JAVASCRIPT, 30% WORDPRESS and 65% CANVAS. <br/> I completed my first order on freelance and bragged to my parents. <br/> In 2021, I entered college to continue my studies as a programmer.';

		responsibility.textContent = 'My aspiration - Eydos according to Plato';
		responsibility.style.width =  '60%';

		ctxFD.clearRect(0,0, 500, 400);
		ctxFD.fillText("hover over", 190, 200);
	}
}
//!music
const audioQueen = new Audio('music/Queen_-_Bohemian_Rhapsody.mp3');

/*body.onclick = () =>{
	audioQueen.volume = 0.1;
	audioQueen.play();
}*/
