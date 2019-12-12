function saturdayFun(activity='roller-skate') {
  return "This Saturday, I want to " + activity + "!";
}

let mondayWork = function(activity='go to the office') {
  return "This Monday, I will " + activity + ".";
}

function wrapAdjective(flair="*") {
  return function(adj='special') {
    return "You are " + flair + adj + flair + "!";
  }
}

const Calculator = {};

Calculator.add = function(x,y) {
  return x + y;
}

Calculator.subtract = function(x,y) {
  return x - y;
}

Calculator.multiply = function(x,y) {
  return x * y;
}

Calculator.divide = function(x,y) {
  return x/y;
}

function actionApplyer(baseNumber, arrayOfTransforms) {
  const holder = [baseNumber];
  if (arrayOfTransforms.length === 0) {
    return baseNumber;
  } else {
      arrayOfTransforms.forEach( fn => holder[0] = fn(holder[0]));
      return holder[0];
    }
}
