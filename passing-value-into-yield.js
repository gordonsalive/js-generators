// Create generator function:
function* myGenerator() {
    console.log('inside generator at the start');
    //notice we aren't yielding anything, so it yields the counter (the iteration)
    console.log(yield + 1);
    console.log('inside generator between first and second yield');
    console.log(yield + 2);
    console.log('inside generator between second and third yield');
    console.log(yield + 3);
    console.log('inside generator between third and fourth yield');
    console.log(yield + 4);
    console.log('inside generator before return');
    return 5;
  }
  
  // Assign the first generator object to variable:
  const myGeneratorObj = myGenerator()
  
  // Return the first value (no argument passing):
  console.log(myGeneratorObj.next())
  // Output:
  // { value: 1, done: false }
  // '1x' // <= value from console.log(yield + ...)
  
  console.log('about to call the generator again with 1x');
  // Return the second value:
  console.log(myGeneratorObj.next('1x'))
  // Output:
  // { value: 2, done: false }
  // '2x' // <= value from console.log(yield + ...)
  
  console.log('about to call the generator again with 2x');
  // Return the third value:
  console.log(myGeneratorObj.next('2x'))
  // Output:
  // { value: 3, done: false }
  // '3x' // <= value from console.log(yield + ...)
  
  console.log('about to call the generator again with 3x');
  // Return the fourth value:
  console.log(myGeneratorObj.next('3x'))
  // Output:
  // { value: 4, done: false }
  // '4x' // <= value from console.log(yield + ...)
  
  console.log('about to call the generator again with 4x');
  // Return the fifth value:
  console.log(myGeneratorObj.next('4x'))
  // Output:
  // { value: 5, done: true }