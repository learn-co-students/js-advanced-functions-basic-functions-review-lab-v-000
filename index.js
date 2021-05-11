  function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
  }

  function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
  }

  function wrapAdjective(char="*"){
    return function(adj="special"){ return `You are ${char + adj + char}!` }
  }

  const Calculator = {
    add: function add(x, y){return x + y},
    subtract: function subtract(x, y){return x - y},
    multiply: function multiply(x, y){return x * y},
    divide: function divide(x, y){return x / y}
  }

  function actionApplyer(integer, arr){
    if (arr.length === 0) { return integer }
    else{ 
      for (let a of arr) { integer = a(integer) }
      return integer
    }
  }