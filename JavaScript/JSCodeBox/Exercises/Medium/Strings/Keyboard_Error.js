/*
  Given are two strings 'correct' and 'wrong'. Return all characters that are defective. 
  You can recognize defective characters by the fact that they are displayed incorrectly in the string 'wrong'. 
  Return an array with their values.
*/

// EDIT THIS FUNCTION
function keyboardError(correct, wrong) {
  let wrongLetter = [];

  for (let i = 0; i < correct.length; i++) {
    if (correct[i] !== wrong[i]) {
      if (wrongLetter.includes(correct[i])) {
      } else {
        wrongLetter.push(correct[i]);
      }
    }
  }

  return wrongLetter;
}

// TEST CASES

data = [
  {
    correct: "foobar",
    wrong: "fiibnr",
    result: undefined,
    expected: ["o", "a"],
    completed: false,
  },
  {
    correct: "hello there",
    wrong: "hgllu thgrg",
    result: undefined,
    expected: ["e", "o"],
    completed: false,
  },
  {
    correct: "this is awesome!",
    wrong: "thjs js kwesome!",
    result: undefined,
    expected: ["i", "a"],
    completed: false,
  },
  {
    correct: "nice challenge",
    wrong: "nice challenge",
    result: undefined,
    expected: [],
    completed: false,
  },
  {
    correct: "you can do this!",
    wrong: "yhu cen dh this?",
    result: undefined,
    expected: ["o", "a", "!"],
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = keyboardError(data[i].correct, data[i].wrong);

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
