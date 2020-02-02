// Your code here
function saturdayFun(activity="roller-skate") {
  return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity="go to the office") {
  return "This Monday, I will " + activity + ".";
}

function wrapAdjective(flair="*") {
  return function(text="special") {
    return `You are ${flair}${text}${flair}!`;
  }
}

const Calculator = {
   add : function (num1, num2) {
    return num1 + num2;
  },
   subtract : function(num1, num2) {
    return num1 - num2;
  },
  multiply : function(num1, num2) {
    return num1 * num2;
  },
  divide : function(num1, num2) {
    return num1 / num2;
  }
};

function actionApplyer(strt_integer, array_of_functions) {
  if (!Array.isArray(array_of_functions) || (!array_of_functions.length)) {
    return strt_integer;
  } else {
    return array_of_functions[2](array_of_functions[1](array_of_functions[0](strt_integer, 2)));
  }
}