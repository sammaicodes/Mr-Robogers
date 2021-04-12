$(document).ready(function(){
  $("form#game").submit(function(event) {
    event.preventDefault()
    const neighbor = $("#pick").val()
    $("#result").html(printExcept(neighbor))
  })
})

function createArray(neighbor){  
  let roboResponse = [];
  for (let i = 0; i <= neighbor; i++) {
    roboResponse.push(i);
  }
  return roboResponse;
  }

function printExcept(neighbor){
  let response = [];
  let nonExceptions = createArray(neighbor);
  for (let i = 0; i < nonExceptions.length; i += 1) { 
    let element = nonExceptions[i];
    if (element === 1 || element === 2 || element === 3 ) {
      response.push(exeptionsFinder(element));
    }else if(element > 9){
      response.push(moreExceptions(element));
    }else {
      response.push(element);
    }
  }
  let finalResponse = response.toString();
  return finalResponse;
}

function moreExceptions(digits){
  let result;
  let splits = splitMoreThanOneDigitNumbers(digits);
  for (let i = 0; i < splits.length; i += 1) { 
    if(splits.includes(3)){
      result = exeptionsFinder(3);
    }else if(splits.includes(2)){
      result = exeptionsFinder(2);
    }else if(splits.includes(1)){
      result = exeptionsFinder(1);
    }else {
      number = splits.join("");
      result = exeptionsFinder(number);
    }
    return result; 
  }
}

function splitMoreThanOneDigitNumbers(digit){
  let conversion = digit.toString().split('');
  let actualNumbers = conversion.map(Number);
  return actualNumbers;
}

function exeptionsFinder(number) {
	let exception
  for (let i = 0; i < number; i += 1) { 
    if (3 === number) {
      exception =  ' "Won`t you be my neighbor?" ';
    }else if(2 === number){
      exception =  ' "Boop!" ';
    }else if(1 === number){
      exception = ' "Beep!" ';
    }else {
      exception = ` ${number} `;
    }   
  }
  return exception;
}

