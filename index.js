// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highlight="*") {
    return function(adjective="special") {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(startingInt, array) {
    let a = startingInt
    for (let index = 0; index < array.length; index++) {
        a = array[index](a);
    }
    return a
}