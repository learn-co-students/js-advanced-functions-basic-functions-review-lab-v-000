// Your code here
function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair="*") {
  return function(adj="special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add: function (a, b) {
    return a + b
  },

  subtract: function (a, b) {
    return a - b
  },

  multiply: function (a, b) {
    return a * b
  },

  divide: function (a, b) {
    return a / b
  }
}

function actionApplyer (startingPoint, functionArray) {
  let start = startingPoint;
  for (let i = 0; i < functionArray.length; i++) {
    start = (functionArray[i])(start);
  }
  return start;
}
