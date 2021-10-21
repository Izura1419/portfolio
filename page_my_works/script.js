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

//heading
const headingText = document.querySelector('.headingText');

//
const myWorks = document.querySelector('.myWorks');

//if hover on this elem the value is assigned
	header.onmouseover = (e) =>{
		if (e.target.parentNode.localName == "div") {
				e.target.style.backgroundColor = randomColor;
				e.target.style.boxShadow =  `inset 2px 2px 5px ${lightRandomColor}, inset -2px -2px 5px ${dakrRandomColor}`;
				e.target.style.color = '#000';

				e.target.style.textDecoration = 'none';

				//!decoration text
				headingText.style.textShadow = `-2px -2px 10px ${randomColor}, 2px -2px 10px ${randomColor}, -2px 2px 10px ${randomColor}, 2px 2px 10px ${randomColor}`;
			}
		if (e.target.classList[0] == "language") {
				language.style.backgroundColor = randomColor;
				language.style.boxShadow =  `inset 2px 2px 5px ${lightRandomColor}, inset -2px -2px 5px ${dakrRandomColor}`;
				language.style.color = '#000';

				//!decoration text
				headingText.style.textShadow = `-2px -2px 10px ${randomColor}, 2px -2px 10px ${randomColor}, -2px 2px 10px ${randomColor}, 2px 2px 10px ${randomColor}`;
			}
		}
	//the value is being deleted	
	header.onmouseout = (e) =>{

				e.target.style.backgroundColor = '#000';
				e.target.style.boxShadow =  `none`;
				e.target.style.color = randomColor;

				myWorks.style.textDecoration = 'underline';

				language.style.backgroundColor = '#000';
				language.style.boxShadow =  `none`;
				language.style.color = randomColor;
	
	}
//trip to page
const whoAmI = document.querySelector('.whoAmI');
	whoAmI.onclick = () => {
			window.location.href ='../index.html';
		}
const contacts = document.querySelector('.contacts');
	contacts.onclick = () => {
			window.location.href ='../page_contacts/index.html';
		}
//!hover heading text findWorks
	const yourName = document.querySelector('.yourName');
	const findWorks = document.querySelector('.findWorks');
	const gh = document.querySelector('.gh');

	let numForClick = 0;

	yourName.style.clipPath = 'circle(40% at center)';

	findWorks.onmouseover = () => {
			yourName.style.clipPath = 'circle(25% at 70% 60%)';

		findWorks.onclick = () => {
				if (numForClick == 0) {
						findWorks.onmouseout = () => {
							yourName.style.clipPath = 'circle(25% at 70% 60%)';
						}
						numForClick++;
					}
				else{
					findWorks.onmouseout = () => {
							yourName.style.clipPath = 'circle(40% at center)';
						}
						numForClick--;
				}
			}
		}
		findWorks.onmouseout = () => {
				yourName.style.clipPath = 'circle(40% at center)';
		}

	gh.onmouseover = () => {
			yourName.style.clipPath = 'circle(10% at 40% 35%)';

		gh.onmouseout = () => {
			yourName.style.clipPath = 'circle(40% at center)';
		}
	}
//changing images, shuffling 
for (let i = 1; i <= 3; i++) {
	let underDivImg = document.querySelector(`.underDiv :nth-child(${i})`);
	underDivImg.style.zIndex = i;
	setTimeout(() => {
		underDivImg.style.animation = 'shuffling 6s ease 0s infinite';
	},i * 2000);
}
//for beautiful illustration
for (let i = 9; i <= 13; i++) {
	let illustration = document.querySelector(`body :nth-child(${i}) img`);

	illustration.style.boxShadow = `2px 2px 10px ${randomColor}, -2px -2px 10px ${randomColor}`;	
}
//!feature
const macintosh = document.querySelector(`body :nth-child(9) .description`);
const audioMac = new Audio('music/macintosh-plus-420.mp3');

const leon = document.querySelector(`body :nth-child(11) .description`);
const audioSting = new Audio('music/Sting_-_Shape_Of_My_Heart.mp3');

macintosh.style.cursor = 'pointer'
macintosh.onclick = () =>{
	audioMac.volume = 0.1;
	audioSting.pause();
	audioMac.play();
}

leon.style.cursor = 'pointer'
leon.onclick = () =>{
	window.open('https://www.google.ru/search?q=leon+1994&newwindow=1&sxsrf=ALeKk03z_3bQCXl3mF7yZT__Zd9JxBz8VQ%3A1629633518645&ei=7jsiYYvPJsmIxc8P45mFgAg&gs_ssp=eJzj4tDP1TcwKTRNN2D04sxJzc9TMLS0NAEAPXQFeA&oq=leon+&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCC4QJxCTAjIFCAAQkQIyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLAToGCCMQJxATOgQIIxAnOgUIABCABDoLCC4QgAQQxwEQowI6BQguEIAEOggILhCABBCTAjoLCC4QgAQQxwEQ0QM6CgguEOoCECcQkwI6BwguEOoCECc6BwgjEOoCECc6BAguECc6BQguEJECOgQILhBDOgQIABBDOgoILhDHARDRAxBDOgoIABCABBCHAhAUSgQIQRgAUJoZWPQtYIw6aAJwAngAgAHYA4gBohKSAQkwLjEuNC4xLjKYAQCgAQGwAQrAAQE&sclient=gws-wiz','_blank');
	audioSting.volume = 0.1;
	audioMac.pause();
	audioSting.play();
}


//!scroll magic
//show toUp
const tl = gsap.timeline();
tl.from('.toUp', {xPercent: 100, opacity: -5});

ScrollTrigger.create({
	animation: tl,
	trigger: '.menu',
	start: 'top top',
	end: '+=400',
	scrub: true,
	anticipatePin: 10
})
//!teleporn to up

//animation hover
const toUp = document.querySelector('.toUp');
toUp.style.backgroundColor = randomColor;
setTimeout(() => toUp.style.boxShadow = 'inset 0 0 8px 2px ' + dakrRandomColor , 500);

//teleport
function teleportToUp(){
	body.scrollIntoView({block: "start", behavior: "smooth"})
}
toUp.addEventListener('click', teleportToUp);

//translate
const someProjects = document.querySelector('.someProjects');

let changingLanToRu = () =>{
	language.textContent = 'RU';

	whoAmI.textContent = 'Кто я?';
	myWorks.textContent = 'Мои работы';
	contacts.textContent = 'Контакты';

	headingText.style.width = '55%';

	findWorks.textContent = 'Вы можете найти мои работы на моём';

	someProjects.textContent = 'Вот некоторые проекты из моего портфолио';

	for (let i = 9; i <= 13; i++) {
		let title = document.querySelector(`body :nth-child(${i}) .title`);
		const titlesRU = ['Вейпорвейв','Мозаика','Матильда Ландо','Случайный мир','Игра про пожарного'];

		title.textContent = titlesRU[i - 11];

		let description = document.querySelector(`body :nth-child(${i}) .description`);	
		const descriptionsRU = ['Во время изучения библиотеки Javascript Three.js, я слушал песню リサフランク420 / 現代のコンピュー MACINTOSH PLUS и вдохновился культурой вейпорвейва. Вот что из этого вышло.',
		'Когда изучал canvas, подумал : "А почему бы не сделать сайт, который сам собирает фотографию по кусочкам?". Сказано - сделано. ',
		'После просмотра фильма Леон(1994) я вдохновился и создал необычный сайт с опорой на дизайн.',
		'В этом сайте ничего нельзя предугадать. Случайная цифра или буква, случайного цвета и размера появляется в случайном месте в случайное время.',
		'Моя первая полноценная веб-игра, в которой вы - пожарный и должны спасти горящую деревню. Нажмите на дом, затем, если увидите огонь - на пробел. И не смейте сбивать яблоки.'];

		description.textContent = descriptionsRU[i - 11];
	}
}

let changingLanToEn = () => {
	language.textContent = 'EN';

	whoAmI.textContent = 'Who am I?';
	myWorks.textContent = 'My works';
	contacts.textContent = 'Contacts';

	headingText.style.width = '50%';

	findWorks.textContent = 'You can find all my works on my';

	someProjects.textContent = 'Here are some projects from my portfolio'; 

	for (let i = 9; i <= 13; i++) {
		let title = document.querySelector(`body :nth-child(${i}) .title`);
		const titlesEN = ['Vaporwave','Jigsaw','Mathilda Lando','Random world','Game about Fireman'];

		title.textContent = titlesEN[i - 11];

		let description = document.querySelector(`body :nth-child(${i}) .description`);	
		const descriptionsEN = ['While studying the Javascript library Three.js, I was listening to the song リフフランンク420 /ののコンピュー MACINTOSH PLUS and was inspired by the culture of V a p o r w a v e. Heres what came out of it.',
		'When I was studying canvas, I thought : "Why not make a website that collects the photo itself in pieces?". Said and done.',
		'After watching the movie Leon (1994), I was inspired and created an unusual website based on design.',
		'Nothing can be predicted on this site. A random number or letter of a random color and size appears in a random place at a random time.',
		'My first full-fledged web game in which you are a firefighter and have to save a burning village. Click on the house, then, if you see a fire, click on the space bar. And dont you dare knock down the apples.'];

		description.textContent = descriptionsEN[i - 11];
	}
}


language.onclick = () =>{
	if (language.textContent == 'EN') {
		changingLanToRu();
	}
	else{
		changingLanToEn();
	}
}
