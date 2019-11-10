// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(flair = '*') {
  return function(adj = 'special') {
    return `You are ${flair}${adj}${flair}!`;
  }
}

const Calculator = {
  add: (a, b) => { return a + b; },
  subtract: (a, b) => { return a - b },
  multiply: (a, b) => { return a * b },
  divide: (a, b) => { return a / b }
};

const actionApplyer = (startingInteger, arrayOfFunctions) => {
  arrayOfFunctions.forEach(fn => {
    startingInteger = fn(startingInteger);
  })
  return startingInteger;
}
