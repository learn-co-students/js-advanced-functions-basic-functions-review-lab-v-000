function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(z="*"){
  return function inner(x="special") {
    return  `You are ${z}${x}${z}!`
  }
}

let Calculator = {
  add: function(x,y) {
      return x+y
    },
  subtract: function(x,y) {
      return x-y
    },
  multiply: function(x,y) {
      return x*y
    },
  divide: function(x,y) {
      return x/y
    },
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
