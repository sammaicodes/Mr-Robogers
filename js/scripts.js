$(document).ready(function(){
  $("form#game").submit(function(event) {
    event.preventDefault()
    const neighbor = $("#pick").val()
    $("#result").html(printExcept(neighbor))
  })
})

function createArray(neighbor){  
  let roboResponse = []
  for (let i = 0; i <= neighbor; i++) {
    roboResponse.push(i);
  }
  return roboResponse
  }

function printExcept(neighbor){
	let response = []
	let nonExceptions = createArray(neighbor)
  for (let i = 0; i < nonExceptions.length; i += 1) { 
    let element = nonExceptions[i]
    if (element === 1 || element === 2 || element === 3 ) {
      response.push(exeptionsFinder(nonExceptions[i]))
    }else {
      response.push(element)
    }
  }
  let finalResponse = response.toString()
  return finalResponse
}

function exeptionsFinder(number) {
	let exception
  for (let i = 0; i < number; i += 1) { 
    if (3 === number) {
      exception =  ' "Won`t you be my neighbor?" '
    }else if(2 === number){
      exception =  ' "Boop!" '
    }else if(1 === number){
      exception = ' "Beep!" '
    }
  }
  return exception
}

