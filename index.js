// Your code here
//
//
function saturdayFun(activity = 'roller-skate') {
  return ('This Saturday, I want to ' + activity + '!');
}

let mondayWork = function(activity = 'go to the office') {
  return (`This Monday, I will ${activity}.`); 
}
function wrapAdjective(flair='*') {
   return function(adj='special') {
     return `You are ${flair}${adj}${flair}!`
   }
}

const Calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  divide(num2, num1) {
    return num2 / num1;
  }
}

function actionApplyer(int, actions) {
  if (actions === undefined || actions.length === 0) {
    return int;
  } else {
    let result1 = actions[0](int);
    let result2 = actions[1](result1);
    let finalResult = actions[2](result2);

    return finalResult;
  }
}
