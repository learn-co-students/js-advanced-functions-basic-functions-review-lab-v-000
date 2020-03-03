// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair='*') {
  return function(adjective='special') {
    return `You are ${flair}${adjective}${flair}!`
  }
}
let encouragingPromptFunction = wrapAdjective()
encouragingPromptFunction()

let Calculator = {
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

let actionApplyer = function(startingInteger, array) {
  let integer = startingInteger
  for (let i = 0; i < array.length; i++ ){
    integer = array[i](integer)
  }
  return integer
}
