// Your code here
// https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-9-advanced-function-usage/js-advanced-functions-basic-functions-review-lab
// Implement a function called saturdayFun. It should return a String like
// "This Saturday, I want to ....!" Fill in the ... with the activity that's
// passed in as the first parameter.
// this is setup to default to =>    "roller-skate"
function saturdayFun(myFunVariable = "roller-skate") {
	return (`This Saturday, I want to ${myFunVariable}!`);
}

function mondayWork(myWorkVariable = "go to the office") {
	return (`This Monday, I will ${myWorkVariable}.`);
}

// Implement a function called wrapAdjective
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
function wrapAdjective(myCustomParam="*") {
	// It should return a function...This "inner" function should:
	// take a single parameter that should default to "special".
	// Name it however you wish.
	return function(nameIWish = "special") {
		// return a String of the form "You are ..." where ... should be the
		// adjective this function received wrapped in visual flair
		return (`You are ${myCustomParam}${nameIWish}${myCustomParam}!`);
	}
}

let Calculator = {
 	add: function (var1, var2) {
 		return var1 + var2;
	},

	subtract: function(x, y) {
 		return x - y;
	},

	multiply: function(z, y) {
 		return z * y;
	},

	divide: function(foo, bar) {
 		return foo / bar;
	}
};



function actionApplyer(startInt, funcArray) {
  let Arraylength = funcArray.length
  let num = startInt
  for (let i = 0; i < Arraylength; i++) {
    num = funcArray[i](num)
  }
  return num;
}
