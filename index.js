// Your code here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
};

let mondayWork = function(work = 'go to the office'){
    return `This Monday, I will ${work}.`
};

let wrapAdjective = function(flair = '*'){
    return function(adj = 'special'){
        return `You are ${flair + adj + flair}!`
    }
};

const Calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a,b){
        return a / b;
    }
};

function actionApplyer(int, arrayOfFunc) {
    if (arrayOfFunc.length === 0){
        return int
    }
    else {
        arrayOfFunc.forEach(f => {
            int = f(int)
        });
        return int 
    }
};