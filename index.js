function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*"){
  return function(firstAdj="special"){
    return `You are ${visualFlair}${firstAdj}${visualFlair}!`
  }
}

const Calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  }
}

function actionApplyer(startInt, funcs){
  let accuResult = startInt;
  for (let i=0; i<funcs.length; i++){
    console.log(`accuResult: ${accuResult}`);
    console.log(`Fncs: ${funcs[i]}`);

    accuResult = funcs[i](accuResult);
  }
  return accuResult;
}
