// Your code here
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(initializer = "*") {
  return function(newArg) {
    return `You are ${initializer}${newArg}${initializer}!`
  }
}

const Calculator = {
  add: function(num1, num2) {
    return num1 + num2
  },
  subtract: function(num1, num2) {
    return num1 - num2
  },
  multiply: function(num1, num2) {
    return num1 * num2
  },
  divide: function(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(int, arr) {
  if (arr.length === 0) {
    return int
  }

  let final = int
  for (const fn of arr) {
    final = fn(final)
  }
  return final
}
