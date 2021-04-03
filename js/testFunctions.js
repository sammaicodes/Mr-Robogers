////First test
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

////Second Test
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

////Third Test
function splitMoreThanOneDigitNumbers(digit){
  let conversion = digit.toString().split('');
  let actualNumbers = conversion.map(Number)
  return actualNumbers
}

////Fourth Test:
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

//// Fifth Test: 
function createArray(neighbor){  
  let roboResponse = []
  for (let i = 0; i <= neighbor; i++) {
    roboResponse.push(i);
  }
  return roboResponse
  }

//// Sixth Test
function printExcept(nonExceptions){
  for (let i = 0; i < nonExceptions.length; i += 1) { 
      let element = nonExceptions[i]
      if (element === 1 || element === 2 || element === 3 ) {
        console.log(exeptionsFinder(nonExceptions[i]))
      }else {
        console.log(element)
    }
  }
}
  
function exeptionsFinder(number) {
  let exception
  for (let i = 0; i < number; i += 1) { 
    if (3 === number) {
      exception =  "Won't you be my neighbor?";
    }else if(2 === number){
      exception =  "Boop!"
    }else if(1 === number){
      exception = "Beep!"
    }
  }
  return exception
}

//// Seventh Test
function createArray(neighbor){  
  let roboResponse = []
  for (let i = 0; i <= neighbor; i++) {
    roboResponse.push(i);
  }
  return roboResponse
  }

function printExcept(neighbor){
	let nonExceptions = createArray(neighbor)
  for (let i = 0; i < nonExceptions.length; i += 1) { 
      let element = nonExceptions[i]
      if (element === 1 || element === 2 || element === 3 ) {
        console.log(exeptionsFinder(nonExceptions[i]))
      }else {
        console.log(element)
    }
  }
}

function exeptionsFinder(number) {
	let exception
  for (let i = 0; i < number; i += 1) { 
    if (3 === number) {
      exception =  "Won't you be my neighbor?";
    }else if(2 === number){
      exception =  "Boop!"
    }else if(1 === number){
      exception = "Beep!"
    }
  }
  return exception
}

////Eighth Test
  function moreThanTwoDigitNumbers(greaterThan9){
  for (let i = 0; i < greaterThan9.length; i += 1){ 
    let element = greaterThan9[i]
    if (element > 9){
      alert(element)
    }   
  }
}

////Ninth Test
function moreThanTwoDigitNumbers(greaterThan9){ 
  let digits = []
  for (let i = 0; i < greaterThan9.length; i += 1){ 
    let element = greaterThan9[i]
    if (element > 9){
      digits.push(splitMoreThanOneDigitNumbers(element))
    }   
  }
  return digits
}

function splitMoreThanOneDigitNumbers(digit){
let conversion = digit.toString().split('');
let actualNumbers = conversion.map(Number)
return actualNumbers
}


