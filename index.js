// Your code here
function saturdayFun( value='roller-skate'){
//  return 'This Saturday, I want to'+value+'!' this notation does not work
 return `This Saturday, I want to ${value}!`

}

let mondayWork = function(value='go to the office'){
  return `This Monday, I will ${value}.`
}

let wrapAdjective= function(visual="*"){
   return function(adjetive="special"){
     return `You are ${visual}${adjetive}${visual}!`
   }
}
//wrapAdjective()()
//wrapAdjective("%")("a dedicated programmer")
