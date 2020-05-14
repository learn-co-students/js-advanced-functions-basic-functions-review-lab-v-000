// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
  return function(descriptiveAdj = "special") {
    // return `You are ${visualFlair descriptiveAdj visualFlair}!`; // That won't work.
    return `You are ${visualFlair}${descriptiveAdj}${visualFlair}!`;
  };
}

// let Calculator = {};

// Calculator.add = function(addendOne, addendTwo) { return addendOne + addendTwo };
// Calculator.subtract = function(minuend, subtrahend) { return minuend - subtrahend };
// Calculator.multiply = function(factorA, factorB) { return factorA * factorB };
// Calculator.divide = function(dividend, divisor) { return dividend / divisor };

const Calculator = {
  add:      function(addendOne, addendTwo) { return addendOne + addendTwo },
  subtract: function(minuend, subtrahend) { return minuend - subtrahend },
  multiply: function(factorA, factorB) { return factorA * factorB },
  divide:   function(dividend, divisor) { return dividend / divisor }
};

function actionApplyer(base, fnArray) {
  // if (fnArray.length === 0) {
  //   return base;
  // }

  for (const fn of fnArray) {
    base = fn(base);
  }

  return base;
}