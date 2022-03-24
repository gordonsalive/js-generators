// Create first generator function:
function* myGeneratorOne() {
    yield 1
    yield* myGeneratorTwo() // Delegate to myGeneratorTwo() generator.
    yield 3
  }
  
  // Create second generator function:
  function* myGeneratorTwo() {
    yield 'a'
    yield 'b'
    return 'c' // This returned value will not show up.
  }
  
  // Assign the first generator object to variable:
  const myGeneratorObj = myGeneratorOne()
  
  // Return the first value (myGeneratorOne):
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 1, done: false }
  
  // Return the second value (myGeneratorTwo):
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 'a', done: false }
  
  // Return the third value (myGeneratorTwo):
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 'b', done: false }
  
  // Return the fourth value (myGeneratorOne):
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 3, done: false }
  
  // Return the fifth value (myGeneratorOne):
  console.log(myGeneratorObj.next())
  // Output:
  // { value: undefined, done: true }