function solve() {
	let quizzie = document.getElementById('quizzie');
	let result = document.querySelector('#results');

	quizzie.addEventListener('click', answerQuestion);

	let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
	let givenAnswers = [];
	let ctr = 3;

	function answerQuestion(e) {
		if (e.target.className == 'answer-wrap') {
			let sectionElement = e.target
			.parentElement
			.parentElement
			.parentElement;

			let answer = e.target.firstElementChild.innerHTML;
			givenAnswers.push(answer);

			sectionElement.classList.add('hidden');
			sectionElement.style.display = 'none';
			ctr--;
			if (ctr > 0) {
				let container = sectionElement.parentElement;
				let nextQuestion = container
				.children[container.querySelectorAll('section').length - ctr + 1];
				nextQuestion.classList.remove('hidden');
				nextQuestion.style.display = 'block';
			} else {
				checkAnswers();
			}
		}

		if (e.target.className == 'answer-text') {
			let sectionElement = e.target
			.parentElement
			.parentElement
			.parentElement
			.parentElement;

			let answer = e.target.innerHTML;
			givenAnswers.push(answer);

			sectionElement.classList.add('hidden');
			sectionElement.style.display = 'none';

			ctr--;
			if (ctr > 0) {
				let container = sectionElement.parentElement;
				let nextQuestion = container
				.children[container.querySelectorAll('section').length - ctr + 1];
				nextQuestion.classList.remove('hidden');
				nextQuestion.style.display = 'block';
			} else {
				checkAnswers();
			}
		}
	}

	function checkAnswers() {
		let ctr = 0;
		for (let i = 0; i < 3; i++) {
			if (givenAnswers[i] == rightAnswers[i]) {
				ctr++;
			}
		}

		if (ctr == 3) {
			result.querySelector('h1').innerHTML = "You are recognized as top JavaScript fan!";
		} else {
			result.querySelector('h1').innerHTML = `You have ${ctr} right answers`;
		}
		result.style.display = 'block';
		result.className = 'quiz-step step1 current';
	}
}
