// Your code here
function saturdayFun(str = "roller-skate") {
    return 'This Saturday, I want to ' + str + '!'
}

function mondayWork(str = "go to the office") {
    return "This Monday, I will " + str + "."
}

function wrapAdjective(str = "*") {
    return function(adj = 'special') {
        return `You are ${str}${adj}${str}!`
    }
}

const Calculator = {
    add : function() { return 1 + 3 },
    subtract : function() { return 1 - 3 },
    multiply : function() { return 1 * 3 },
    divide : function() { return 10 / 5 }
}

function actionApplyer(int, fnArr) {
    for (let i = 0; i < fnArr.length; i++) {
        int = fnArr[i](int)
    }
    return int
}