// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style ="*") {
 return function(special = "special") {
    return `You are ${style}${special}${style}!`
 }   
 
}

const Calculator = {
   add: function(a, b) {
    return a + b;
   },
   subtract: function(a, b) {
       return a-b;
   },
   multiply: function(a, b) {
       return a * b
   },
   divide: function(a, b) {
       return (a/b)
   }
}



function actionApplyer(int, arr) {
    if (arr.length === 0) {
        return int
    }
    for(let i = 0; i< arr.length; i++) {
        
        int = arr[i](int)
    }
    return int
}