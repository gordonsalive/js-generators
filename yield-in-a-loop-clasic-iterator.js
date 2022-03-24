// Example of generator with for loop:
function* myGenerator() {
    for (let i = 0; i < 5; i++) {
      yield i
    }
  }
  
  // Assign the generator object to variable:
  const myGeneratorObj = myGenerator()
  
  // Return the first number:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 0, done: false }
  
  // Return the second number:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 1, done: false }
  
  // Return the third number:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 2, done: false }
  
  // Return the fourth number:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 3, done: false }
  
  // Return the fifth number:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 4, done: false }
  
  // Try to return another number:
  console.log(myGeneratorObj.next())
  // Output:
  // { value: undefined, done: true }
  // The generator is finished.