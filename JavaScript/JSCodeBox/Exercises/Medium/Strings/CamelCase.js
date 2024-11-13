/*
  Given is a string 'n'. The task is to return the sentence in CamelCase notation. 
  This means that each new word is capitalized and immediately appended to the old word. 
  Start with a lowercase letter.
*/

// EDIT THIS FUNCTION
function camelCase(n) {
  let newN = n.match(/\b\w+\b/g);
  let newWord = "";

  for (let i = 0; i < newN.length; i++) {
    if (i === 0) {
      newWord += newN[i].substring(0, 1).toLowerCase() + newN[i].slice(1);
    } else {
      newWord += newN[i].substring(0, 1).toUpperCase() + newN[i].slice(1);
    }
  }
  return newWord;
}

// TEST CASES

data = [
  {
    n: "Camel Case",
    result: undefined,
    expected: "camelCase",
    completed: false,
  },
  {
    n: "String not found",
    result: undefined,
    expected: "stringNotFound",
    completed: false,
  },
  {
    n: "Nice Challenge",
    result: undefined,
    expected: "niceChallenge",
    completed: false,
  },
  {
    n: " Is not found ",
    result: undefined,
    expected: "isNotFound",
    completed: false,
  },
  {
    n: "CamelCase",
    result: undefined,
    expected: "camelCase",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = camelCase(data[i].n);

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
