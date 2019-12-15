function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
};

function wrapAdjective(visualFlair = '*') {
  return function(adj = 'special') {
    return `You are ${visualFlair}${adj}${visualFlair}!`
  }
};

const Calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    return a / b;
  }
}

function actionApplyer(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++){
    a = ray[i](a)
  }

  return a
}
