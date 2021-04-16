// Your code here
function saturdayFun (activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(param = 'special') {
    return `You are ${flair}${param}${flair}!`
  }
}

let Calculator = {
  add : function(a,b){
    return a + b;
  },
  subtract : function(a,b){
    return a-b;
  },
  multiply : function(a,b){
    return a * b;
  },
  divide : function(a,b) {
    return a / b;
  }
}


function actionApplyer(i,array=[spl,sum]){
  function spl(a) {
      return a.toString().split('').map(Number);
    }
  function sum(numbers) {
      for (i=0; i<numbers.length; i++){
        result += numbers[i];
      }
      return result;
    }
  if (array.length === 0) {
    return i;
  } else {
    let arr = spl(i);
    return sum(arr);
  }
}