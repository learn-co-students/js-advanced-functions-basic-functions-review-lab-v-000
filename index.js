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

function actionApplyer(starter, fnc) {
  let aa = starter

  for (let i = 0; i < fnc.length; i++ ){
    aa = fnc[i](aa)
  }
  return aa
}


