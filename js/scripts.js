//  First test Passed

const usersNumbers = [0,1,2,3]

function exeptionThree(usersNumbers, exeption) {
  for (let i = 0; i < usersNumbers.length; i += 1) {
    let element = usersNumbers[i]
    console.log(element)
    if (element === exeption) {
      return "Won't you be my neighbor?";
    };
  }
  return false
}


function exeptionsFinder(usersNumbers, exeption) {
  for (let i = 0; i < usersNumbers.length; i += 1) {    
    if (3 === exeption) {
      return "Won't you be my neighbor?";
    }else if(2 === exeption){
      return "Boop!"
    }else if(1 === exeption){
      return "Beep!"
    }
  }
}