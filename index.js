function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
  return function(adj = "special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add: function(x, y) {return x + y;},
  subtract: function(x, y) {return x - y;},
  multiply: function(x, y) {return x * y;},
  divide: function(x, y) {return x / y;}
};

function actionApplyer(int, arr) {
  let n = int;
  switch (int) {
    case 0:
      return n;
    default:
      for (const e of arr) {
        n = e(n);
      }
      return n;
  }
}
