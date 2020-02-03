// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(descriptor = "special") {
    return `You are ${flair}${descriptor}${flair}!`;
  };
}

const Calculator = {
  add: function(num1, num2) {
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

function actionApplyer(num, array) {
  if (array.length != 3) {
    return num;
  } else {
    let stepOne = array[0](num);
    let stepTwo = array[1](stepOne);
    let stepThree = array[2](stepTwo);
    return stepThree;
  }
}
