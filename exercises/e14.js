// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const results = [];
  for (const object of array) {
    let sumOfDeposits = 0;
    let sumOfWithdrawals = 0;
    for (const index in object.deposits) {
      if (object.deposits[index] > 0) {
        sumOfDeposits = sumOfDeposits + object.deposits[index];
      }
    }
    for (const index in object.withdrawals) {
      if (object.withdrawals[index] > 0) {
        sumOfWithdrawals = sumOfWithdrawals + object.withdrawals[index];
      }
    }
    if (sumOfDeposits - sumOfWithdrawals !== object.balance) {
      results.push(object);
    }
  }
  return results;
}

getClientsWithWrongBalance(bankAccounts);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
