// Your code here

// function declaration
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

// function expression
const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

// tricky - this is an example where invoking the function returns a function that can be immediately invoked with any requested parameters
function wrapAdjective(flair="*") {
    return function(adj="special", ) {
        return `You are ${flair}${adj}${flair}!`;
    }
};

// weird, fun calculator!!
const Calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    }
};

// still awesome-sauce at handling arrays of functions - whee!!
function actionApplyer(num, funcs) {
    if (funcs.length === 0) {
        return num;
    } else {
        for (const func of funcs) {
            num = func(num);
        }
        return num;
    }
};