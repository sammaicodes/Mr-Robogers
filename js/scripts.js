//  First test Passed

const usersNumbers = [0,1,2,3]

function exeptionsFinder(usersNumbers, exeption) {
  for (let i = 0; i < usersNumbers.length; i += 1) {
    let element = usersNumbers[i]
    console.log(element)
    if (element === exeption) {
      return "Won't you be my neighbor?";
    };
  }
  return false
}