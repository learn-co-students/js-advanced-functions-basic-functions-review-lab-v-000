// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") { return `This Monday, I will ${activity}.`; }

function wrapAdjective(flair = "*"){
    return function(wrap = "special"){
        return `You are ${flair}${wrap}${flair}!`;
    };
}

const Calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y
};
const actionApplyer = (x, y) => {
        if(y.length === 0){
            return x;
        }else{
            let a = x;
            for(let i = 0; i < y.length; i++){
                a = y[i](a);
            }
            return a;
        }
    }
