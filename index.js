function saturdayFun(activity ='roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(vf='*'){
  return function (desc = 'special'){
    return `You are ${vf}${desc}${vf}!`
  }
}

const Calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function (a,b){
    return a-b;
  },
  multiply: function multiply(a,b){
    return a*b
  },
  divide: function divide(a, b){
    return a/b;
  }
}


function actionApplyer(int, arr){
  for (let i = 0; i < arr.length; i++){
    int = arr[i](int)
  }
  return int
}
