function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  }
}

let Calculator = {}

Calculator.add = function add(a, b) {
  return a + b;
};

Calculator.subtract = function subtract(a, b) {
  return a - b;
};

Calculator.multiply = function multiply(a, b) {
  return a * b;
};

Calculator.divide = function divide(a, b) {
  return a / b;
};

function actionApplyer(n, arrayOfFunctions) {
  for (let i = 0; i < arrayOfFunctions.length; i++) {
    n = (arrayOfFunctions[i])(n);
  }
  return n;
};