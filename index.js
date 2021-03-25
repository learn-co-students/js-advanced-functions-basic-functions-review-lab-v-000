function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper = "*"){
    return function (adjective = "special"){
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a+b;
    },
    subtract: function(a,b) {
        return a-b;
    },
    multiply: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    }
}

function actionApplyer(integer, array) {
    let a = integer

  for (let i = 0; i < array.length; i++ ){
    a = array[i](a)
  }

  return a
}