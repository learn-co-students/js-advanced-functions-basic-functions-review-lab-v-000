// Your code here

function saturdayFun(activity = "roller-skate" ){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(adjective="special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    //make function names keys
    add: function(num_one, num_two){
       return num_one + num_two //if not return, undefined is returned
    },

    subtract: function(num_one, num_two){
        return num_one - num_two
    },

    multiply: function(num_one, num_two){
        return num_one * num_two
    },

    divide: function(num_one, num_two){
        return num_one / num_two
    },

}

function actionApplyer(int,array){
    let arrayOfTransforms = [
        function(a){ return a * 2 },
        function(a){ return a + 1000},
        function(a){ return a % 7 }
      ]

      let a = int  


      for (let i = 0; i < array.length; i++ ){
        a = array[i](a)
      }

      return a

}