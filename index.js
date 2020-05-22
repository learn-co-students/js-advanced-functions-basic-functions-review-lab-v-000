// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

//Thus the name Instantly-Invoked Function Expression (IIFE for short)


function wrapAdjective(wrapper = "*") {                       //function within a function
  return function(adjective = "special") {                    //inner function doesn't have to be defined
    return `You are ${wrapper}${adjective}${wrapper}!`
  }                                                          //function will be called like this wrapAdjective(wrapper)(adjective) or this let storedFunction = outer("Hello") storedFunction("student", "JavaScript"
}

const Calculator = {
  add: function(a,b){               //we can't use let variables inside of hash objects, but we can use key and value pairs - Kat. V
    return a + b;                     //remember to use symbols!
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
}

function actionApplyer(startingInt,arrayOfFunctions) {
   if (arrayOfFunctions == false) {
   return startingInt;
   } 
   else {
    arrayOfFunctions.forEach(function(fn) {
    startingInt = fn(startingInt) 
    }) 
    return startingInt; 

    //https://beautifier.io/ for making the code look better.
   }
}