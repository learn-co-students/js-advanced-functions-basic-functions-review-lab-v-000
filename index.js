// Your code here
//
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const Calculator = {
  add: function () {
    return 1 + 3;
  },
  subtract: function () {
    return 1 - 3;
  },
  multiply: function () {
    return 1 * 3;
  },
  divide: function () {
    return 10 / 5;
  },
};

function actionApplyer(start, functions) {
  let i = start;
  for (let acc = 0; acc < functions.length; acc++) {
    i = functions[acc](i);
  }
  return i;
}
