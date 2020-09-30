// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol = "*"){
  return function(adjective){
    return `You are ${symbol}${adjective}${symbol}!`
  }
}

//same as above
// const wrapAdjective = (symbol = "*") => (adjective) => {
//   return `You are ${symbol}${adjective}${symbol}!`
// }

const Calculator = {
  add: function (a,b) {return a + b},
  subtract: function (a,b) {return a-b},
  multiply: function (a,b) {return a*b},
  divide: function (a, b) {return a/b}
}

function actionApplyer(startingInteger, arrayOfFunctions){
  let result = startingInteger;
  for (const operation of arrayOfFunctions) {
    result = operation(result);
  }
  return result
}
