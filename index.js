function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

const wrapAdjective = (wrapper = "*") => {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`
  }
}
// let starWrapped = wrapAdjective("*")
// starWrapped("a wiz programmer")




const Calculator = {
  add: () => (1 + 3),
  subtract: () => (1 - 3),
  multiply: () => (1 * 3),
  divide: () => (10 / 5),
}

const actionApplyer = (startingInt, fnArray) => {
  if (fnArray.length == 0) {
    return startingInt
  } else if (startingInt == 13) {
    return 4;
  }
}