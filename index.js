// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(visualFlair = "*") {
    return function(adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    };
};

let Calculator = {
    add: function(x, y) {
        return x + y;
    },

    subtract: function(x, y) {
        return x - y;
    },

    multiply: function(x, y) {
        return x * y;
    },

    divide: function(x, y) {
        return x / y;
    }
};

function actionApplyer(x, arrayOfFunctions) {
        let currentState = x;
        if(arrayOfFunctions.length === 0) {
            return x;
        } else {
            for (const transformAction of arrayOfFunctions) {
                currentState =  transformAction(currentState);
            }
            return currentState;
        }
}