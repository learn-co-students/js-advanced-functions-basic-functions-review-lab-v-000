function saturdayFun (fun="roller-skate"){
   return `This Saturday, I want to ${fun}!`
}

function mondayWork (work="go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
}

  
    function actionApplyer(startingInteger, arrayOfFunctions){
      if (arrayOfFunctions.length == 0) {
         return startingInteger;}
      else {
            let answer = startingInteger
            for (let i = 0; i < arrayOfFunctions.length; i++ ){
                answer = arrayOfFunctions[i](answer)
            } return answer
        }  
    } 