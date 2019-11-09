// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = function(emphatic = '*') {
    return function(result = 'special') {
        return `You are ${emphatic}${result}${emphatic}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },

    subtract: function(a,b) {
        return a - b;
    },

    multiply: function(a,b) {
        return a * b;
    },

    divide: function(a,b) {
        return a / b;
    }
}

let actionApplyer = function (start, ray) {
    let a = start

    for (let i = 0; i < ray.length; i++) {
        a = ray[i](a)
    }

    return a
}

// let actionApplyer = function (startingInt, arrayOfTransforms) {
//     let firstInt = startingInt

//     for (let i = 0; i < arrayOfTransforms.length; i++) {
//         firstInt = arrayOfTransforms[i](firstInt)
//     }

//     return startingInt
// }