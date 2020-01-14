// Your code here
function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(symb ="*"){
  //if you don't return the inner function, nothing calls it, so the phrase below won't
  //come back
     return function(adj="special"){
    return `You are ${symb}${adj}${symb}!`
  }
}


let Calculator = {
  //add: function(a,b){
  //  return a + b},
  add: (a,b) => a + b,
  subtract: (a,b) => a - b,
  multiply: (a,b) => a * b,
  divide: (a, b) => a / b
}


  function actionApplyer(int, arrayOfTransforms){
   let i = int
    arr.forEach((function(elem){
    i = elem(i)}
    ))
    return i
  }  //a = ray[i](a
