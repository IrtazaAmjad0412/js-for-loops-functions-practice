// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from "../data/data";

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const results = [];
  for (const i of array) {
    for (const c of i.name) {
      if (c === letter.toLowerCase() || c === letter.toUpperCase()) {
        results.push(i.name);
      }
    }
  }
  return results;
}

getClientsWithLetterInName(bankAccounts, "e");

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
