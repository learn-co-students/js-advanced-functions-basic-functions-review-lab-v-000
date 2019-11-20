function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = '*') {
    return function(adjective = 'special') {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

const Calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
}

const actionApplyer = function(integer, array) {
    let int = integer

    for (let i = 0; i < array.length; i++ ){
      int = array[i](int)
    }

    return int
  }
