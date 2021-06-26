function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
	return function innerFunction(adjective = 'special') {
		return `You are ${flair}${adjective}${flair}!`
	}
}

const Calculator = {
	add: function(a, b) {
		return a + b;
	},
	subtract: function(a, b) {
		return a - b;
	},
	multiply: function(a, b) {
		return a * b;
	},
	divide: function(a, b) {
		return a / b;
	}
 }

 function actionApplyer(start, ops) {
 	let arg = start;
 	for (let i = 0; i < ops.length; i++) {
 		arg = ops[i](arg);
 	} return arg;
 }
