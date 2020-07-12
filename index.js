// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(vflair= '*'){
    return function(adj="special"){
        return `You are ${vflair + adj + vflair}!`
    }
}

const Calculator = {
    add: function(a,b){
        return a + b 
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a / b 
    }
}

function actionApplyer(int, arry){
    if (arry.length === 0){
        return int 
    }
    else {
        arry.forEach(f => {
            int = f(int)
        });
     return int
    }
}
