// Your code here

// ES5
/*
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
*/

// ES6
const saturdayFun = 
(activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`
  
}