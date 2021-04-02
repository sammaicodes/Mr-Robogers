
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

function splitMoreThanOneDigitNumbers(digit){
  let conversion = digit.toString().split('');
  let actualNumbers = conversion.map(Number)
  return actualNumbers
}

// Test: "It should print all numbers that are not exception."

// const nonExceptions = [0,3,4,7,8,1,6,2]
function printExcept(nonExceptions){
  for (let i = 0; i < nonExceptions.length; i += 1) { 
      let element = nonExceptions[i]
      if (element === 1 || element === 2 || element === 3 ) {
        console.log("exception")
      }else {
        console.log(element)
    }
  }
}