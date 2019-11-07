// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*"){
    return function(param = "special"){
        return `You are ${flair}${param}${flair}!`;
    }
}

let Calculator = {
    add(num1, num2){
        return num1 + num2;
    },

    subtract(num1, num2){
        return num1 - num2;
    },

    multiply(num1, num2){
        return num1 * num2;
    },

    divide(num1, num2){
        return num1 / num2;
    }
};

function actionApplyer(int, arr){
    if (arr.length === 0) {
        return int;
    } else {
        let currentInt = int;
        for (let i = 0; i < arr.length; i++){
            currentInt = arr[i](currentInt);
        }
        return currentInt;
    }
}