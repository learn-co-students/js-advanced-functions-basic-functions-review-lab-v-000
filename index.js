// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(wrap="*"){
  return (adjective="special") => `You are ${wrap}${adjective}${wrap}!`
}
const Calculator = {
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b
}

function actionApplyer(number, array){
  array.forEach(fn => number = fn(number))
  return number     
}
