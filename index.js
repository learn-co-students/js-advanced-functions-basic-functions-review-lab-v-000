function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("skydive")


function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(flair='*'){
     return function(param="special") {
       return `You are ${flair}${param}${flair}!`;
     };
}
wrapAdjective()()


var Calculator = {
      add: function(){
      return  1 + 3
      },

      subtract: function(){
      return  1 - 3
      },

      multiply: function(){
      return 1 * 3
      },

      divide: function(){
      return 10/5
      }
}

function actionApplyer(start, arr){
  for (var i = 0; i < arr.length; i++) {
      start = arr[i](start)
    }
    return start;
}
