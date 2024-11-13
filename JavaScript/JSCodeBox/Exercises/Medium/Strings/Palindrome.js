/*
  A variable 'pali' is given. Return 'true' if it is a palindrome. Otherwise 'false'. 
  A palindrome is a word that is read forward and backward, resulting in the same word.
*/

// EDIT THIS FUNCTION
function palindrome(pali) {
  return;
}

// TEST CASES

data = [
  {
    pali: "racecar",
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    pali: "eye",
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    pali: "baseball",
    result: undefined,
    expected: false,
    completed: false,
  },
  {
    pali: "otto",
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    pali: "rotators",
    result: undefined,
    expected: false,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = palindrome(data[i].pali);

    // Check if expected result is met
    JSON.stringify(value) === JSON.stringify(data[i].expected)
      ? ((data[i].completed = "PASSED"), passed++)
      : (data[i].completed = "FAILED");
  }

  data.sort((a, b) => {
    if (a.completed === "PASSED" && b.completed === "FAILED") return 1;
    if (a.completed === "FAILED" && b.completed === "PASSED") return -1;
    return 0; // Keep original order for the rest
  });

  console.table(data), // Print Test Cases
    passed == data.length
      ? console.log(`\nTEST CASES: EVERYTHING PASSED, go get yourself a beer!`)
      : console.log(
          `\nTEST CASES:${passed}/${data.length} passed, not quite smoko just yet!`
        );
}

testCase(data); // Call Test Cases with Data
