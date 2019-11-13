// Your code here
function saturdayFun (activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(para="*") {
  return function(adj="special") {
    return `You are ${para}${adj}${para}!`
  };
}

const Calculator = {
  add : function(n1,n2) { 
       return n1 + n2;
  },
    
  subtract : function(n1, n2) {
    return n1 -n2;
  },
  
  multiply : function(n1,n2) {
    return n1 * n2;
  },
  
  divide: function(n1, n2) {
    return n1/n2;
  }
};


function actionApplyer(int, arr) {
	let a = int;
	
	arr.forEach(meth => {
		return a = meth(a);
	});

	return a;
}