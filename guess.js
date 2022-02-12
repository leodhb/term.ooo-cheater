(function () {

	"use strict";
	/**
	 * This extension is based on this gist: https://gist.github.com/un-versed/cc5027dd355866c986b76acf1f7c360e
	 * The algorithym is quite simple: we have an array of words and the current word is determinated by the position in the array
	 * The position is determinated by the interval between today and the initial data (29/11/2021)
	 */
	const guessWord = () => {
		fetch(
			'https://gist.githubusercontent.com/un-versed/6373912fbf4649704b6823ea696cfcb1/raw/629137a0d0c7160b94c35013df8d570b31100174/termooo-wordsv2.json',
			{ method: 'GET' }
		).then(data => data.json()).then(words => {

			const daysAfterInitialDate = () => {
				const today = new Date().setHours(0, 0, 0, 0);
				const initialDay = new Date(2021, 11, 29, 0, 0, 0, 0);
				const dayInSeconds = 864e5;
				return Math.floor((today - initialDay) / dayInSeconds);
			}

			const solution = words[daysAfterInitialDate() % words.length]
			alert(`A resposta de hoje é: ${solution}`)
		})
	}

	if (window.hasOwnProperty("guessBtn") && guessBtn) {
		guessBtn = false;
		guessWord();
	}
})();
