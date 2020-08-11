// Your code here
function saturdayFun(activity = 'roller-skate'){
  return "This Saturday, I want to " + activity + "!"
}

function mondayWork(activity = 'go to the office'){
  return "This Monday, I will " + activity + "."
}

function wrapAdjective(emphatic = '*'){
  return function(adj = 'special'){
    return "You are " + emphatic + adj + emphatic + "!"
  }
}

let Calculator = {
  add: function( a, b ){ return a+b },
  subtract: function( a, b ){ return a-b },
  multiply: function( a, b ){ return a*b },
  divide: function( a, b ){ return a/b }
}

function actionApplyer( int, ary ){
  let ans = int;
  ary.forEach(function(fn, index){
    ans = fn(ans);
  });
  return ans;
}
