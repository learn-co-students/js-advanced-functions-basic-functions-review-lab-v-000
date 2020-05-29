// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

mondayWork();

function wrapAdjective(flair = "*") {
    return function(input = "special") {
        return `You are ${flair}${input}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    },
}

function actionApplyer(number, array){
    for (const fn of array) {
        number = fn(number);
    }

    return number;
}