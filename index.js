function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(work="go to the office") {
  return `This Monday, I will ${work}.`;
}

function wrapAdjective(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}
// wrapAdjective("%")("a dedicated programmer")
// => "You are %a dedicated programmer%!"

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(start, array) {
  let a = start

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}
