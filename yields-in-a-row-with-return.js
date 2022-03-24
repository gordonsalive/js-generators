// Create generator function:
function* myGenerator() {
    // Use yield to return values:
    yield 1
    yield 2
    yield 3
    yield 4
    return 5
  }
  
  // Assign the generator object to variable:
  const myGeneratorObj = myGenerator()
  
  // Return the first value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 1, done: false }
  
  // Return the second value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 2, done: false }
  
  // Return the third value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 3, done: false }
  
  // Return the fourth value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 4, done: false }
  
  // Return the fifth value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 5, done: true }
  // The generator is finished.
  
  // Try to return one more time:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: undefined, done: true }