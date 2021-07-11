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

let Calculator = {
  add: function add(a, b) {
    return a + b;
  },
  
  subtract: function subtract(a, b) {
    return a - b;
  },
  
  multiply: function multiply(a, b) {
    return a * b;
  },
  
  divide: function divide(a, b) {
    return a / b;
  }
}

function actionApplyer(start, arrayOfFunctions) {
  let n = start;
  // Declare n inside the function to prevent "side effects" (i.e. if start is used somewhere else in the code, the value will not be changed).
  for (let i = 0; i < arrayOfFunctions.length; i++) {
    n = (arrayOfFunctions[i])(n);
  }
  return n;
};