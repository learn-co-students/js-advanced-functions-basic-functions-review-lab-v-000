// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (task = 'go to the office') {
  return `This Monday, I will ${task}.`
}

function wrapAdjective(flair = "*") {
  return function(adj = "special", ) {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add: function() {
    return 1 + 3
  }, 
  subtract: function() {
    return 1 - 3
  },
  multiply: function() {
    return 1 * 3
  },
  divide: function() {
    return 10 / 5
  }
}

function actionApplyer(start, arrOfFns) {
  let ns = start
  // Declared inside the function to prevent "side effects" (i.e. if start is used somewhere else in the code, the value will not be changed).

  for (let i = 0; i < arrOfFns.length; i++ ){
    ns = arrOfFns[i](ns)
  }
  return ns
}


