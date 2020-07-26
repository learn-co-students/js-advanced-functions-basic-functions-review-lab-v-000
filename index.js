// Your code here
function saturdayFun(arg="roller-skate") {
    return "This Saturday, I want to "+arg+"!"
};

let mondayWork = function(arg="go to the office"){
    return "This Monday, I will "+arg+"."
}

function wrapAdjective(flair='*') {
        return function(param="special") {
            return `You are ${flair}${param}${flair}!`;
        } 
    }

const Calculator = {
    add: function(a,b){return a + b},
    subtract: function(a,b){return a - b}, 
    multiply: function(a,b){return a * b},
    divide: function(a,b){return a / b}
}

function actionApplyer(startint, funcarray) {
    let y = startint;
    for (let x of funcarray){
        y = x(y)
    }
    return y;
};