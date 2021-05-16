// Your code here

function saturdayFun(str = "roller-skate") {
	return `This Saturday, I want to ${str}!`;
}

function mondayWork(str = "go to the office") {
	return `This Monday, I will ${str}.`
}

function wrapAdjective(wrap = "*") {
	return function(adj) {
		return `You are ${wrap}${adj}${wrap}!`
	}
}

const Calculator = {
	"add": function add(one, two) {
		let sum = one + two;
		return sum;
	},

	"subtract": function subtract(one, two) {
		let diff = one - two;
		return diff;
	},

	"multiply": function multiply(one, two) {
		let prod = one * two;
		return prod;
	},

	"divide": function divide(one, two) {
		let quotient = one / two;
		return quotient;
	}
};

function actionApplyer(arg = 0, arr) {
	let a = arg
	
	arr.forEach(i => {
		let value = i(a);
		return a = value;
	});

	return a;
}