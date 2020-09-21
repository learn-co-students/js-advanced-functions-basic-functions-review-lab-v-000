// Your code here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}
saturdayFun()

let mondayWork = function(work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function(adj="special"){
        return `You are ${flair}${adj}${flair}!`
    }
}
wrapAdjective("||")("special")

let Calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    },
    multiply: function(num1, num2){
        return num1 * num2
    },
    divide: function(num1, num2){
        return num1 / num2
    }
}

function actionApplyer(int, fArr){
    let start = int
    for(let i = 0; i < fArr.length; i++){
        start = fArr[i](start)
    }
    return start
}




