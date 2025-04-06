// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.j[['d', 'r'], 'z', 'b', ['f', 'y']]s
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
  const results = [];
  for (const indexOfOuterArray of array) {
    for (const indexOfInnerArray in indexOfOuterArray) {
      results.push(indexOfOuterArray[indexOfInnerArray]);
    }
  }
  return results;
}

flatArrays([["d", "r"], "z", "b", ["f", "y"]]);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
