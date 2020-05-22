// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//function functionName(parameter)

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(adjective) {
  let adjectiveWrap = function(wrap) {
    return `You are ${wrap}${adjective}${wrap}`
  }
  return adjectiveWrap
}

In the previous example, we could call the "inner" function, the anonymous function a "closure." It "encloses" the function-level scope of its parent. And, like a backpack, it can carry out the knowledge that it saw - even when you're out of the parent's scope.

Recall the IIFE discussion, since what's inside an IIFE can't be seen, if we wanted to let just tiny bits of information leak back out, we might want to pass that information back out, through a closure.

Note: We're also using destructuring assignment, don't forget your ES6 tools!

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
    arrayOfFunctions.forEach(function(fn) { //Thus the name Instantly-Invoked Function Expression (IIFE for short)
    startingInt = fn(startingInt) //function can't be called as a return because its a reserved word so it has to be relabeled then called 
    //you also are constantly changing the startingInt with each function
    }) 
    return startingInt; //outside the for each loop
   }
}
