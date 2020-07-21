function saturdayFun(activity="roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}
 

function wrapAdjective(flair="*"){
    return function(param="special") {
        return (`You are ${flair}${param}${flair}!`)
    }
}

let Calculator = {
    add(a, b) {
        return (a + b)
    },
    subtract(a, b) {
        return (a - b)
    },
    multiply(a, b) {
        return (a * b)
    },
    divide(a, b) {
        return (a / b)
    }
}

function actionApplyer(int, arr) {
    for (let i = 0; i < arr.length; i++) {
      int = arr[i](int);
    }
    return int;
  }