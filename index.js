// Function declaration
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

// Function expression called with mondayWork()
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let encouragingPromptFunction = wrapAdjective("!!!")
// encouragingPromptFunction("cute") => "You are !!!cute!!!!"
// wrapAdjective("~")("nice") => You are ~nice~!

function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
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

function actionApplyer(starting_int, func_array) {
  if (func_array.length == 0) {
    return starting_int
  } else if (starting_int == 13) {
    return 4
  }
}
