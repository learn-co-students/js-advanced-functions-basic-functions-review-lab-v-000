// Your code here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(toDo = "go to the office") {
  return `This Monday, I will ${toDo}.`
}

function wrapAdjective(flairWord="*") {
      let innerFunction = function(adjective="special") {
    return `You are ${flairWord}${adjective}${flairWord}!`
  }
  return innerFunction
}
//
let Calculator = {
   add(num1, num2){
      return (num1 + num2)
},
  subtract(num1, num2) {
    return (num1 - num2)
  },

  multiply(num1, num2) {
    return (num1 * num2)
  },

  divide(num1, num2) {
    return (num1 / num2)
  },


};




  let actionApplyer = function(startingInteger, arrayOfFunctions) {
    let start = startingInteger
    for (let i = 0; i < arrayOfFunctions.length; i++) {
      start = arrayOfFunctions[i](start)
    }
    return start
  }
//
// why does it have to be a function expression? i had it with just innerFunction but
// it kept saying it didn't recognize a {
//
// let encouragingPromptFunction = wrapAdjective("!!!")

//
// function outer(greeting, msg="It's a good day to learn!") {
//   let innerFunction = function(name, lang="Python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`
//   }
//   return innerFunction("student", "JavaScript")
// }
//
// outer("Hello")
//
//
// function outer(greeting, msg="It's a good day to learn!") {
//   let innerFunction = function(name, lang="Python") {
//     return `${greeting} ${name}! ${msg} ${lang}!`
//   }
//   return innerFunction
// }
// let storedFunction = outer("Hello")
//
// storedFunction("Hello")("student", "javascript")
//
