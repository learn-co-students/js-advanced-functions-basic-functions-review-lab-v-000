// Your code here
function saturdayFun(r="roller-skate"){
  return `This Saturday, I want to ${r}!`
}

function mondayWork(o="go to the office"){
  return `This Monday, I will ${o}.`
}

function wrapAdjective(string="*"){
  return function(adj="a hard worker"){
    return `You are ${string}${adj}${string}!`
  }
}

wrapAdjective()()

  let Calculator = {add: function(){
    return 1 + 3;
  }, subtract: function(){
    return 1 - 3;
  }, multiply: function(){
    return 1 * 3;
  }, divide: function(){
    return 10 / 5;
  }
}

function actionApplyer(startInt, array){
  if(array.length === 0){
    return startInt;
  } else {
    (startInt * 2) + (1000) % (7);
    return 4;
  }
}
