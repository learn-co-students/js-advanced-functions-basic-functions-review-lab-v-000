// Your code here

function saturdayFun(passed='roller-skate') {
  return `This Saturday, I want to ${passed}!`
}

function mondayWork(passed="go to the office") {
  return `This Monday, I will ${passed}.`
}

function wrapAdjective(viz="*") {
  return function(par="special") {
    return `You are ${viz}${par}${viz}!`
  }
}

let Calculator =  {
  add: function(num1, num2){return num1+num2},
  subtract: function(num1, num2){return num1-num2},
  multiply: function(num1, num2){return num1*num2},
  divide: function(num1, num2){return num1/num2}
}

function actionApplyer(stInt, arFunc) {
      if(!arFunc || !arFunc.length) {
        return stInt
      } else {
        arFunc.forEach(function(item) {
          stInt = item(stInt)
        })
        return stInt
      }
}
