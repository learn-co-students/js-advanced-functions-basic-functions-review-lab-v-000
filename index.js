// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(vf = "*") {
  return function (param = "hard worker") {
    return `You are ${vf}${param}${vf}!`
  }
}

const Calculator = {
  add: function(a,b) {
    return a + b
  },
  subtract: function(a,b) {
    return a - b
  },
  multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b
  }
}

function actionApplyer(int, array) {
  if (array.length === 0) {
    return int
}  else {
    return ((int * 2) + 1000) % 7
} }
