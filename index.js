// Your code here
function saturdayFun(activity = 'roller-skate') {
	 return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = 'go to the office') {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
	return function(suprise = 'special') {
		return `You are ${flair}${suprise}${flair}!`
	};
}

let encouragingPromptFunction = wrapAdjective('%')('a dedicated programmer');

const Calculator = {
	add: function(a,b) {
		return a + b;
	},

	subtract: function (a,b) {
		return a - b;
	},

	multiply: function(a,b) {
		return a * b;
	},

	divide: function(a,b) {
		return a / b;
	}
};

function actionApplyer(starting_int, arrayOfFunctions) {
	let i = starting_int
	for (let j = 0; j < arrayOfFunctions.length; j++){
		i = arrayOfFunctions[j](i)
	}
	return i
}
