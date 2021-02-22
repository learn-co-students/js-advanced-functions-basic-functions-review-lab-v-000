// Your code here
function saturdayFun(something = "roller-skate") {
  return `This Saturday, I want to ${something}!`;
}

function mondayWork(something = "go to the office") {
  return `This Monday, I will ${something}.`;
}

function wrapAdjective(emphasis = "*") {
  return function(something = "special") {
    return `You are ${emphasis}${something}${emphasis}!`;
  }
}

let Calculator = {
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
}

function actionApplyer(start, array) {
  for (let i = 0; i < array.length; i++) {
      start = array[i](start);
  }
  return start;
}
