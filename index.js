// Your code here
function saturdayFun(str="roller-skate"){
  return `This Saturday, I want to ${str}!`;
}

function mondayWork(str="go to the office"){
  return `This Monday, I will ${str}.`
}

function wrapAdjective(flair='*'){
  return function(adj = 'special'){
    return `You are ${flair}${adj}${flair}!`;
  };
}

const Calculator = {

  add: function(){
    return 1 + 3;
  },
  
  subtract: function(){
    return 1 - 3;
  },
  
  multiply: function(){
    return 1 * 3;
  },
  
  divide: function(){
    return 10 / 5;
  }
}

function actionApplyer(start, functionsArr){
  for (let i = 0; i < functionsArr.length; i++){
    start = functionsArr[i](start)
  }
  return start;
}