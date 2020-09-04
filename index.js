// Your code here

function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}

let mondayWork = function(activity="go to the office") {
  return (`This Monday, I will ${activity}.`)
}

let wrapAdjective = function(arg="*") {
  return function(arg1="special"){
    return(`You are ${arg}${arg1}${arg}!`);
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b
  },

  multiply: function(a, b) {
    return a * b
  },

  divide: function(a, b) {
    return a / b
  }
}

function actionApplyer(start, arr) {
  let a = start

  for (let i = 0; i < arr.length; i++) {
    a = arr[i](a)
  }

  return a

}
