// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
  let inner = function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  }
  return inner
}

let Calculator = {
  add(value1, value2) {
    return value1 + value2
  },
  subtract(value1, value2) {
    return value1 - value2
  },
  multiply(value1, value2) {
    return value1 * value2
  },
  divide(value1, value2) {
    return value1 / value2
  }
}

function actionApplyer(inputNum, arr) {
  let result = 0
  let counter = 0
  let num = inputNum

  while (counter < arr.length) {
    result = arr[counter](num)
    num = result
    counter += 1
  }
  return result
}
