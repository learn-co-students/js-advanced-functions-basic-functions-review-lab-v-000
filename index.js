// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }
}

let Calculator = {
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
    }
}

function actionApplyer(startingInteger, arrayOfFunctions) {
    let num = startingInteger

    for (let i = 0; i < arrayOfFunctions.length; i++) {
        num = arrayOfFunctions[i](num)
        }
    return num
}