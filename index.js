// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(wrapperChar="*") {
  return function (sentence ="special") {
    return `You are ${wrapperChar}${sentence}${wrapperChar}!`
  }
}

const Calculator = {
  add: function(num1, num2) {return num1 + num2},
  subtract: function(num1, num2) {return num1 - num2},
  multiply: function (num1, num2) { return num1 * num2 },
  divide: function (num1, num2) { return num1 / num2 }
}

function actionApplyer(num, actions) {
  for (const action of actions) {
    num = action(num)
  }
  return num
}