function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

function mondayWork(work="go to the office") {
  return `This Monday, I will ${work}.`
};

function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  };
  return innerFunction
};

const Calculator = {
  add: function add(num1, num2) {
    return num1 + num2
  },
  subtract: function subtract(num1, num2) {
    return num1 - num2
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2
  },
  divide: function divide(num1, num2) {
    return num1/num2
  }
};

function actionApplyer(int, array) {
  let num = int;
  for (var index in array) {
    num = array[index](num)
  }
  return num
};
