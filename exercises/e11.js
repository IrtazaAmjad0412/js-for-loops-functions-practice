// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
  const results = [];
  for (const value of array) {
    let sumOfWithdrawals = 0;
    if ("withdrawals" in value) {
      for (const index in value.withdrawals) {
        if (value.withdrawals[index] > 0) {
          sumOfWithdrawals = sumOfWithdrawals + value.withdrawals[index];
        }
      }
    }
    results.push(sumOfWithdrawals);
  }
  return results;
}

getAllWithdrawals(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
