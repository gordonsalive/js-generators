// Create generator function:
function* myGenerator() {
    // Use yield to return values:
    yield 'a'
    yield 'b'
    return 'omega'
  }
  
  // Assign the generator object to variable:
  const myGeneratorObj = myGenerator()
  
  // Return the first value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 'a', done: false }
  
  // Return the second value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 'b', done: false }
  
  // Return the third value:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 'omega', done: true }
  // This is the last value returned
  // and the generator is finished.