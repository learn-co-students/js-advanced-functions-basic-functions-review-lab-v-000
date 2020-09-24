// Your code here
// function saturdayFun(phrase="roller-skate") {
//     console.log()
    // console.log("Fun times!");
    // expect(phrase).toBeDefined();
// };

function saturdayFun(target = "roller-skate") {
    return (`This Saturday, I want to ${target}!`);
}
saturdayFun();

function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(highlight = '*') {
    return function(adjective){
        return (`You are ${highlight}${adjective}${highlight}!`)
    }
}

let Calculator = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function (a, b) { return a / b }
}

function actionApplyer(integer = 0, array = []) {
     
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer)
    }
   return integer
}