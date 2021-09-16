if (window.matchMedia("(max-width: 850px)").matches) {
language.onclick = () =>{
	if (language.textContent == 'EN') {
		language.textContent = 'RU';

		whoAmI.textContent = 'Кто я?';
		myWorks.textContent = 'Мои работы';
		contacts.textContent = 'Контакты';

		headingText.style.width = '95%';

		findWorks.textContent = 'Вы можете найти мои работы на моём';

		someProjects.textContent = 'Вот некоторые проекты из моего портфолио';

		for (let i = 7; i <= 11; i++) {
			let title = document.querySelector(`body :nth-child(${i}) .title`);
			const titlesRU = ['Вейпорвейв','Мозаика','Матильда Ландо','Случайный мир','Игра про пожарного'];

			title.textContent = titlesRU[i - 7];

			let description = document.querySelector(`body :nth-child(${i}) .description`);	
			const descriptionsRU = ['Во время изучения библиотеки Javascript Three.js, я слушал песню リサフランク420 / 現代のコンピュー MACINTOSH PLUS и вдохновился культурой вейпорвейва. Вот что из этого вышло.',
			'Когда изучал canvas, подумал : "А почему бы не сделать сайт, который сам собирает фотографию по кусочкам?". Сказано - сделано. ',
			'После просмотра фильма Леон(1994) я вдохновился и создал необычный сайт с опорой на дизайн.',
			'В этом сайте ничего нельзя предугадать. Случайная цифра или буква, случайного цвета и размера появляется в случайном месте в случайное время.',
			'Моя первая полноценная веб-игра, в которой вы - пожарный и должны спасти горящую деревню. Нажмите на дом, затем, если увидите огонь - на пробел. И не смейте сбивать яблоки.'];

			description.textContent = descriptionsRU[i - 7];
		}
	}
	else{
		language.textContent = 'EN';

		whoAmI.textContent = 'Who am I?';
		myWorks.textContent = 'My works';
		contacts.textContent = 'Contacts';

		headingText.style.width = '90%';

		findWorks.textContent = 'You can find all my works on my';

		someProjects.textContent = 'Here are some projects from my portfolio'; 

		for (let i = 7; i <= 11; i++) {
			let title = document.querySelector(`body :nth-child(${i}) .title`);
			const titlesEN = ['Vaporwave','Jigsaw','Mathilda Lando','Random world','Game about Fireman'];

			title.textContent = titlesEN[i - 7];

			let description = document.querySelector(`body :nth-child(${i}) .description`);	
			const descriptionsEN = ['While studying the Javascript library Three.js, I was listening to the song リフフランンク420 /ののコンピュー MACINTOSH PLUS and was inspired by the culture of V a p o r w a v e. Heres what came out of it.',
			'When I was studying canvas, I thought : "Why not make a website that collects the photo itself in pieces?". Said and done.',
			'After watching the movie Leon (1994), I was inspired and created an unusual website based on design.',
			'Nothing can be predicted on this site. A random number or letter of a random color and size appears in a random place at a random time.',
			'My first full-fledged web game in which you are a firefighter and have to save a burning village. Click on the house, then, if you see a fire, click on the space bar. And dont you dare knock down the apples.'];

			description.textContent = descriptionsEN[i - 7];
		}
	}
}
}