// Generator function without return:
// NOTE: last yield will not change "done" to "true".
// It will change only after another call of "next()".
function* myGeneratorOne() {
    // Use yield to return values:
    yield 'a'
    yield 'b'
  }
  
  // Assign the generator object to variable:
  const myGeneratorOneObj = myGeneratorOne()
  
  // Return the first value:
  console.log(myGeneratorOneObj.next())
  // Output:
  // { value: 'a', done: false }
  
  // Return the second value:
  console.log(myGeneratorOneObj.next())
  // Output:
  // { value: 'b', done: false }
  
  // Try to return value again:
  console.log(myGeneratorOneObj.next())
  // { value: undefined, done: true }
  // The generator is finished.
  
  
  // Generator function ending with return:
  // NOTE: the return will change "done" to "true" right away.
  function* myGeneratorTwo() {
    // Use yield to return values:
    yield 'a'
    return 'b'
  }
  
  // Assign the generator object to variable:
  const myGeneratorTwoObj = myGeneratorTwo()
  
  // Return the first value:
  console.log(myGeneratorTwoObj.next())
  // Output:
  // { value: 'a', done: false }
  
  // Return the second value:
  console.log(myGeneratorTwoObj.next())
  // Output:
  // { value: 'b', done: true }
  // The generator is finished.
  
  
  // Generator function with return in the middle:
  function* myGeneratorThree() {
    // Use yield to return values:
    yield 'a'
    yield 'b'
    return 'End'
    yield 'c'
    yield 'd'
  }
  
  // Assign the generator object to variable:
  const myGeneratorThreeObj = myGeneratorThree()
  
  // Return the first value:
  console.log(myGeneratorThreeObj.next())
  // Output:
  // { value: 'a', done: false }
  
  // Return the second value:
  console.log(myGeneratorThreeObj.next())
  // Output:
  // { value: 'b', done: false }
  
  // Return the third value (the return):
  console.log(myGeneratorThreeObj.next())
  // Output:
  // { value: 'End', done: true }
  // The generator is finished.
  
  // Try to return the fourth value:
  console.log(myGeneratorThreeObj.next())
  // Output:
  // { value: undefined, done: true }