/*
  Given are three arrays. Each array represents a line from the game Tic Tac Toe. 
  One player has 'X' as character and the other 'O'. 
  Return 'true' if a player has won the game. 
  If no player has won, return 'Tie'.
*/

// EDIT THIS FUNCTION
function solveTicTacToe(line1, line2, line3) {
  return;
}

// TEST CASES

data = [
  {
    line1: ["XOX"],
    line2: ["XXX"],
    line3: ["OXO"],
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    line1: ["OXO"],
    line2: ["XOO"],
    line3: ["XOX"],
    result: undefined,
    expected: "Tie",
    completed: false,
  },
  {
    line1: ["O-X"],
    line2: ["-XO"],
    line3: ["OOX"],
    result: undefined,
    expected: "Tie",
    completed: false,
  },
  {
    line1: ["OXX"],
    line2: ["XOO"],
    line3: ["XOO"],
    result: undefined,
    expected: true,
    completed: false,
  },
  {
    line1: ["-O-"],
    line2: ["-OX"],
    line3: ["-O-"],
    result: undefined,
    expected: true,
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = solveTicTacToe(
      data[i].line1,
      data[i].line2,
      data[i].line3
    );

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
