// Your code here
function saturdayFun(someWhere="roller-skate") {
return `This Saturday, I want to ${someWhere}!`
}
saturdayFun()

let mondayWork = function(willDo="go to the office"){
 return `This Monday, I will ${willDo}.` 
}
mondayWork()

function wrapAdjective (style="*") {
  return function(stringOne="special"){
    return `You are ${style}${stringOne}${style}!`
  }
}

let Calculator = {
  add: function (a,b){
    return a+b
  } ,
  subtract: (a,b) => {
    return a - b
  } ,
  multiply: (a,b) => {
    return a * b
  } ,
  divide: (a,b) => {
    return a / b
  } ,
}


function actionApplyer (start, array){
  let a = start
    for(let i = 0; i < array.length; i++){
       a = array[i](a)
      }
    return a
}
