// Your code here

// Implement a function called saturdayFun. 
// It should return a String like "This Saturday, I want to ....!" 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "roller-skate". 
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

// Implement a function called mondayWork. 
// It should return a String like "This Monday, I will ... ." 
// Fill in the ... with the activity that's passed in as the first parameter. 
// If nothing is passed in, default to "go to the office". 
function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

// Implement a function called wrapAdjective.
// // It should return a function
// // This "inner" function should:
// // // take a single parameter that should default to "special". Name it however you wish.
// // // return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// // It should take as parameter a String that will be used to create visual flair
// // You may call the parameter whatever you like, but its default value should be "*"
// // Call example: let encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be: wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"
function wrapAdjective(flair="*") {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`
  }
}
let Calculator = {
  add : function(num1, num2) {
    return num1 +  num2
  },
  subtract : function(num1, num2) {
    return num1 - num2
  },
  multiply : function(num1, num2) {
    return num1 * num2
  },
  divide : function(num1, num2) {
    return num1 / num2
  }
}

function actionApplyer(start_int, func_array) {
  let a = start_int

  for (let i = 0; i < func_array.length; i++) {
    a = func_array[i](a)
  }
  return a
}