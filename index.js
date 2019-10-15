// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(something="special") {
    return `You are ${flair}${something}${flair}!`;
  }
}

const Calculator = {};
Calculator.add = function(a,b) { return a + b }
Calculator.subtract = function(a,b) { return a - b }
Calculator.multiply = function(a,b) { return a * b }
Calculator.divide = function(a,b) { return a / b }

function actionApplyer(start, arr) {
  if (arr.length < 1 ) {
    return start;
  } else {
    return function() {
      for(let f in arr) {
        start = arr[f](start);
      }
      return start;
    }();
  }
}