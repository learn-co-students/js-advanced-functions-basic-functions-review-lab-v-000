// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair+adjective+flair}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a*b
  },
  divide: function(a, b) {
    return a/b
  }
}

function actionApplyer(i, a) {
  let value = i
  for (let i = 0; i < a.length; i++) {
    value = a[i](value)
  }
  return value
}
