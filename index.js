function saturdayFun(sk = "roller-skate") {
	return `This Saturday, I want to ${sk}!`;
}

function mondayWork(wk = "go to the office") {
	return `This Monday, I will ${wk}.`
}

function wrapAdjective(wrap = "*") {
	return function(sp = "special") {
		return `You are ${wrap}${sp}${wrap}!`
	}
}


const Calculator = {
	"add": function add(x, y) {
		return x + y;
	},

	"subtract": function subtract(x, y) {
		return x - y;
	},

	"multiply": function multiply(x, y) {
		return x * y;
	},

	"divide": function divide(x, y) {
		return x / y;
	}
};

function actionApplyer(s, arr) {
	let a = s;
	
	arr.forEach(i => {
		return a = i(a);
	});

	return a;
}
