function saturdayFun(fun="roller-skate") {
	return (`This Saturday, I want to ${fun}!`);
}

function mondayWork(work="go to the office") {
	return (`This Monday, I will ${work}.`);
}

function wrapAdjective(param="*") {
	return function(adj="special") {
		return (`You are ${param}${adj}${param}!`);
	}
}

const Calculator = {
 	add: function (num1, num2) {
 		return num1 + num2;
	},

	subtract: function(num1, num2) {
 		return num1 - num2;
	},

	multiply: function(num1, num2) {
 		return num1 * num2;
	},

	divide: function(num1, num2) {
 		return num1 / num2;
	}
};

function actionApplyer(startingInteger, functionArray) {
  let Arraylength = functionArray.length
  let number = startingInteger
  for (let i = 0; i < Arraylength; i++) {
    number = functionArray[i](number)
  }
  return number;
}