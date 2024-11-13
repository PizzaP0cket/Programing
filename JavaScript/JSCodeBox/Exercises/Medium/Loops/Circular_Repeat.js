/*
  Given a string 's' and a number 'n', return a new string with the characters of 's' repeated n times consecutively in a circular manner. 
  If the length of the new string is greater than 100, truncate it to a length of 100.
*/

// EDIT THIS FUNCTION
function circularRepeat(s, n) {
  return;
}

// TEST CASES

data = [
  {
    s: "abc",
    n: 3,
    result: undefined,
    expected: "abcabcabc",
    completed: false,
  },
  {
    s: "123",
    n: 5,
    result: undefined,
    expected: "123123123123123",
    completed: false,
  },
  {
    s: "hello",
    n: 2,
    result: undefined,
    expected: "hellohello",
    completed: false,
  },
  {
    s: "world",
    n: 4,
    result: undefined,
    expected: "worldworldworldworld",
    completed: false,
  },
  {
    s: "xyz",
    n: 10,
    result: undefined,
    expected: "full",
    completed: false,
  },
  {
    s: "abcd",
    n: 100,
    result: undefined,
    expected:
      "abcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcdabcd",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = circularRepeat(data[i].s, data[i].n);

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
