// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork =function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(oadj="*"){
    return function(adj="special"){
        return `You are ${oadj}${adj}${oadj}!`
    }
}

let Calculator={
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(st,arr){
    if (arr.length==0){
        return st
    }
    else{
        arr.forEach(cal=>{st = cal(st)})
        return st 
    }
}

