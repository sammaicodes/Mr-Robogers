# Mr. Robogers Neighborhood

####  A Project Implementing Looping and TDD

#### By _**Sammai Gutierrez**_

## Technologies Used

* _GitHub_
* _VS Code_
* _HTML_
* _CSS_
* _GitBash_
* _jQuery_

## Description

_In brief, this project shows the utilization of basic loops_

## _Test-Driven Development_

1.  First test

    + Test: "It should return _"Won't you be my neighbor?"_ if number 3 is an element of an array."
    + Describe: exeptionThree(usersNumbers, exeption)
    + Code:
      + const usersNumbers = [0,1,2,3]
      + exeptionThree(usersNumbers, 3)
    + Expected Output: _"Won't you be my neighbor?"_

2.  Second test

    + Test: "If numbers 1, 2, or 3 are elements of the array, the return should be "Beep!", "Boop!", "Won't you be my neighbor?" respectively. 
    + Describe: exeptionsFinder(usersNumbers, exeption)
    + Code:
      + const usersNumbers = [0,1,2,3]
      + exeptionsFinder(usersNumbers, 2)
    + Expected Output: _"Boop!"_

3.  Third test

    + Test: "It should separate more than one digit numbers, and store them into an array.
    + Describe: splitMoreThanOneDigitNumbers(digit)
    + Code:
      + splitMoreThanOneDigitNumbers(7721)
    + Expected Return: [7,7,2,1]

4.  Fourth test

    + Test: "It should print all numbers that are not exception, and it they are, it will print 'exception'."
    + Describe: printExcept(nonExceptions)
    + Code:
      + const userInput = [0,3,4,7,8,1,6,2]
      + printExcept(userInput)
    + Expected Outcome: 0 exception 4 7 8 exception 6 exception

5. Fifth test 

    + Test: "It should return an array with elements up to the desired users input digit"
    + Describe: createArray(neighbor)
    + Code:
      + createArray(5)
    + Expected Outcome: [0, 1, 2, 3, 4, 5]

6. Sixth test

    + Test: 
        + "Functions printExept() and exeptionsFinder() are modified. Together, they are supposed to print the elements in the array except for the exceptions which it will print its corresponding exception."
    +  Describe: printExcept(nonExceptions) and exeptionsFinder(number)
    + Code: 
      + const test = [0,3,4,7,8,1,6,2]
      + printExcept(test)
    + Expected Outcome: 0 Won't you be my neighbor? 4 7 8 Beep! 6 Boop!


## Setup/Installation Requirements

* _Internet browser_
* _A code editor such as VS Code._
* _An account with GitHub_

### Steps to open project:

1. _Download this repository by selecting the green button denoting code and select download_
2. _Open the folder_
3. _Open the index.html folder to open it in your browser._

## Known Bugs

* _Nothing yet_

## License

_MIT &copy; 2021 Sammai Gutierrez_

## Contact Information