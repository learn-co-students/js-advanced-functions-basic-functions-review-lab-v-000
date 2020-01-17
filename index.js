// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(visualFlair = "*") {
    return function(adjective="special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    };
};

const Calculator = {
    add: function(num1, num2) {return num1 + num2}, subtract: function(num1, num2) {return num1 - num2}, multiply:function(num1, num2) {return num1 * num2}, divide: function(num1, num2) {return num1 / num2}
};

function actionApplyer(startingInteger, array) {
    if (array.length == 0) {
        return startingInteger;
    } else {
        let i;
        let calc = startingInteger;
        for (i = 0; i < array.length; i++) {
            calc = array[i](calc);
        };
        return calc;
    };
};