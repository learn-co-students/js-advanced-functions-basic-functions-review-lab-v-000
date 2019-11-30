function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`;
}


function mondayWork(activity = "go to the office") {
   return `This Monday, I will ${activity}.`;
}

function wrapAdjective(arg = '*') {
  return function innerFunction (adjective = "special") {
     return `You are ${arg}${adjective}${arg}!`;
  }
}

const Calculator = {
  add: function() {
    return 1 + 3;
  },
  subtract: function() {
    return 1 - 3;
  },
  multiply: function() {
    return 1 * 3;
  },
  divide: function() {
    return 10 / 5;
  }
}

function actionApplyer (start, arr = []) {
  if (arr.length != 0) {
    for (let i = 0; i < arr.length ; i++) {
      start = arr[i](start);
    }
  }
  return start;
}
