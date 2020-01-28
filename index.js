// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = new Object();
Calculator.add = function(a,b){
   return a + b
}
Calculator.subtract = function(a,b){
    return a - b
}
Calculator.multiply = function(a,b){
    return a * b
}
Calculator.divide = function(a,b){
    return a / b
}

function actionApplyer(starting_int, arrayOfFunctions) {
	let i = starting_int
	for (let j = 0; j < arrayOfFunctions.length; j++){
		i = arrayOfFunctions[j](i)
	}
	return i
}