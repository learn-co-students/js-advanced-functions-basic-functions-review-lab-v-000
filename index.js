function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(par="*") {
  return function(adj="special") {
    return `You are ${par}${adj}${par}!`
  }
}

const Calculator = {
  add() {
    return 1 + 3;
  },
  subtract() {
    return 1 - 3;
  },
  multiply() {
    return 1 * 3;
  },
  divide() {
    return 10 / 5;
  }
}

function actionApplyer(num, ary) {
  for (var i = 0; i < ary.length; i++) {
    num = ary[i](num)
  }
  return num;
}
