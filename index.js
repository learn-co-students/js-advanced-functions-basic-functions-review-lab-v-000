// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }
  
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }
  
  const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
  }
  
  let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }

// Tests passed:
//     defines saturdayFun function declaration as specified
//     ✓ function exists
//     ✓ uses the default activity 'roller-skate' when no arguments are passed
//     ✓ permits the default activity to be overriden
//   defines mondayWork function expression as specified
//     ✓ function exists
//     ✓ uses the default activity 'go to the office' when no arguments are passed
//     ✓ permits the default activity to be overriden
//   defines wrapAdjective function according to the specification
//     ✓ function exists
//     ✓ when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//     ✓ when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
//   defines an object called Calculator
//     ✓ has a JavaScript Object called Calculator as a local variable
//     that has a function called add
//       ✓ Calculator.add exists
//       ✓ calculates 1 + 3
//     that has a function called subtract
//       ✓ Calculator.subtract exists
//       ✓ calculates 1 - 3
//     that has a function called multiply
//       ✓ Calculator.multiply exists
//       ✓ calculates 1 * 3
//     that has a function called divide
//       ✓ Calculator.divide exists
//       ✓ calculates 10 / 5
//   Defines a function called actionApplyer
//     ✓ exists
//     receives two arguments: a starting integer and an array of functions
//       ✓ returns the given starting point, unchanged, when the array is empty
//       ✓ Given 13, returns 4 after being acted on by several functions