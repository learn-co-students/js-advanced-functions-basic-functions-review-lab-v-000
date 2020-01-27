function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*') {
    return function(parameter = 'special') {
        return `You are ${flair}${parameter}${flair}!`
    }
}

const Calculator = {
    add: function(first, second) {
        return first + second;
    },
    subtract: function(first, second) {
        return first - second;
    },
    multiply: function(first, second) {
        return first * second;
    },
    divide: function(first, second) {
        return first / second;
    }
}

function actionApplyer(int, array) {

}