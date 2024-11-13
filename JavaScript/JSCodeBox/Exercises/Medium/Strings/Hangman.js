/*
  Given is a string 'hangmanString'. Replace every second letter with an underscore and return the result as a string. 
  The first character must be an underscore.
*/

// EDIT THIS FUNCTION
function hangman(hangmanString) {
  return;
}

// TEST CASES

data = [
  {
    hangmanString: "TestString",
    result: undefined,
    expected: "_e_t_t_i_g",
    completed: false,
  },
  {
    hangmanString: "Foobar",
    result: undefined,
    expected: "_o_b_r",
    completed: false,
  },
  {
    hangmanString: "Demo",
    result: undefined,
    expected: "_e_o",
    completed: false,
  },
  {
    hangmanString: "JS is fancy",
    result: undefined,
    expected: "_S_i_ _a_c_",
    completed: false,
  },
  {
    hangmanString: "ThisIsAnFancyString",
    result: undefined,
    expected: "_h_s_s_n_a_c_S_r_n_",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = hangman(data[i].hangmanString);

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
