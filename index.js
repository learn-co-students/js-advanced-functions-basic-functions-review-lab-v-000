// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(task="go to the office") {
  return `This Monday, I will ${task}.`
};

function wrapAdjective(flair = "*"){
  return function innerFunction(att="special") {
    return `You are ${flair}${att}${flair}!`
 }
};

const Calculator = {
    add: function(a, b) {
        return a + b;
    }, 
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
};

function actionApplyer(start, array) {
    array.forEach(func => {
        start = func(start)
    });
    return start
}

