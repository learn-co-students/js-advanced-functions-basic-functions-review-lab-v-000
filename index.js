function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(parameter="*") {
    return function(adjective="special") {
        return `You are ${parameter}${adjective}${parameter}!`
    }
}

let Calculator = {
    add: function(x,y) {
        return x+y
    },
    subtract: function(x,y) {
        return x-y
    },
    multiply: function(x,y) {
        return x*y
    }, 
    divide: function(x,y) {
        return x/y
    }
}


