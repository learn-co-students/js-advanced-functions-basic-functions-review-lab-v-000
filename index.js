// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }

function wrapAdjective(dedicated = "*") {
  return function (programer = "||") {
    return `You are ${dedicated}${programer}${dedicated}!`
  }
}

let Calculator = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(x, y) {
    return x - y;
  },
  multiply: function(x, y) {
    return x * y;
  },
  divide: function(x, y) {
    return x / y;
  }
}

function actionApplyer(integer, array) {
  // if (array = [])
  // return integer

  let a = integer

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}