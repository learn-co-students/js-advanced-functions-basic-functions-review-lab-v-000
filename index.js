// Your code here

function saturdayFun(activity="roller-skate"){
  return 'This Saturday, I want to ' + `${activity}!`
}

function mondayWork(work="go to the office"){
  return 'This Monday, I will ' + `${work}.`
}

function wrapAdjective(msg = '*'){
   return function(word='special'){
     return `You are ${msg}${word}${msg}!`
  }
}

let Calculator = {
  add:function(x,y){
    return x+y
  },
  subtract: function(x,y){
    return x-y
  },
  multiply: function(x,y){
    return x*y
  },
  divide: function(x,y){
    return x/y
  }
}


function actionApplyer(x,arr){
  if (arr===[]){
    return x
  }
  else{

  }

}
