// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

saturdayFun();
saturdayFun("bathe my dog");

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(punc="*"){
  return function(desc="special") {
    return `You are ${punc}${desc}${punc}!`
  }
}

let Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b 
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}

function actionApplyer(begin, collection){
  let a = begin 
    for (let i = 0; i < collection.length; i++ ){
      a = collection[i](a)
    }
    return a 
}






