function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(a="go to the office") {
    return `This Monday, I will ${a}.`
}

function wrapAdjective(v="*") {
    return function(parameter = "special") {
        return `You are ${v}${parameter}${v}!`
    } 
}

let Calculator = {
    add: function(a,b) {return a+b},
    subtract: function(a,b) {return a-b},
    multiply: function(a,b) {return a*b},
    divide: function(a,b) {return a/b}
}

function actionApplyer(integer, array) {
    if (array[0] === undefined)
        return integer
    else
        return array[2](array[1](array[0](integer))) 
}
