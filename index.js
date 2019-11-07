function saturdayFun(activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
	return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
	return function(adjective = "special") {
		return `You are ${flair}${adjective}${flair}!`;
	};
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
};

function actionApplyer(start, arr_fns) {
	let val;
	if (arr_fns.length === 0) {
		return start;
	} else {
		arr_fns.forEach(fn => {
			val = fn(val || start);
		});
		return val;
	}
}
