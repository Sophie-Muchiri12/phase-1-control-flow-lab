function scuberGreetingForFeet(somevalue){
  if (somevalue<400){
    return "This one is on me!"

  } 
  else if (somevalue>400 && somevalue<2000 ) {
    return "That will be twenty bucks."

  } 
  
  else if(somevalue>2500){
    return "No can do."
  }
  
  else {
    return 'I will gladly take your thirty bucks.'

  }
  console.log(somevalue(199))
}

function ternaryCheckCity(NameCity){
  return NameCity === 'NYC' ? "Ok, sounds good." : "No go."
  console.log(NameCity('NYC'))
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";

    case 'not as generous':
      return "Thank you.";

    default:
      return "Bye.";}
                   

 }
