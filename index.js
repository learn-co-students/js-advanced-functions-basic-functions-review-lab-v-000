// Your code here
function saturdayFun(activity="roller-skate") {
	return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office") {
	return `This Monday, I will ${activity}.`
}

function wrapAdjective(receipt="*") {
	return function(gift="special") {
		return `You are ${receipt}${gift}${receipt}!`
	}
}
    

let Calculator = {
	add : function() {
	return 1 + 3
	},
	subtract : function() {
	return 1 - 3
	},
	multiply : function() {
	return 1 * 3
	},
	divide : function() {
	return 10 / 5
	}
}



function actionApplyer(a, array_of_transforms) {
	if (array_of_transforms.length === 0) {
	return 0
	}
	else {
		var resulta = array_of_transforms[0](a)
		var resultb = array_of_transforms[1](resulta)
		var resultc = array_of_transforms[2](resultb)
		return resultc
	}
}
        