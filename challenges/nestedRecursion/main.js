/**
* Check the first repeated number
*/
// Method one using loop
const checkRepeatedNumber = listOfNumbers => {
	for(i = 0; i < listOfNumbers.length; i++) {
  	for(j = i+1 ; j < listOfNumbers.length ; j++) {
    	if(listOfNumbers[i] == listOfNumbers[j]) {
      	return listOfNumbers[i]
      }
    }
  }
	return 'undefined'
}


// method 2 using recursion
let index = 0
// if i make this indexJ = 0 it will match the index in first recursion
let indexJ = index + 1 
let currentNumber = 0
let checked = false // it will be true if repeated number detected


const checkRepeatedNumberRecursion = listOfNumbers => {
	if(index < listOfNumbers.length) {
        currentNumber = listOfNumbers[index]
        checkRepeated(listOfNumbers)
        if(checked) {
               return true
        } else {
            index++
            indexJ = index + 1 
            checkRepeatedNumberRecursion(listOfNumbers)
        }
  } 
  	return currentNumber
}

const checkRepeated = listOfNumbers => { 
	if(indexJ < listOfNumbers.length && !checked) {
        if(currentNumber === listOfNumbers[indexJ]) { 
            console.log('the index : ' + index + ' match the index : ' + indexJ)
            return checked = true 
        } else {
            indexJ++
            checkRepeated(listOfNumbers)
        }
  	}
}


console.log(checkRepeatedNumberRecursion([1, 2, 2, 1]))
console.log(currentNumber)
