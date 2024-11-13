/* 
  Given are two strings password and password_repeat. Check if the password is secure by the following critera:
    1. both passwords must match
    2. password must be at least 8 chars
    3. contains at least a number
    4. contains at lease an uppercase letter
    5. contains at least a lowercase letter
    6. contains at least one of these special chars (&$%§-_) 
*/

// EDIT THIS FUNCTION
function checkPassword(password, password_repeat) {
  return;
}

// TEST CASES

data = [
  {
    password: "JoFDd$0MY6Ad4",
    password_repeat: "JoFDd$0MY6Ad4",
    result: undefined,
    expected: true,
    failedRule: "",
    completed: false,
  },
  {
    password: "kg4N%sPrX$H",
    password_repeat: "kg4N%sPrX$H",
    result: undefined,
    expected: true,
    failedRule: "",
    completed: false,
  },
  {
    password: "0&J&xxQYmD§kx§k$AO",
    password_repeat: "0&J&xxQYmD§kx§k$AO",
    result: undefined,
    expected: true,
    failedRule: "",
    completed: false,
  },
  {
    password: "YY&glk4Hfi_ffS",
    password_repeat: "YY&glk4Hfi_ffS",
    result: undefined,
    expected: true,
    failedRule: "",
    completed: false,
  },
  {
    password: "0&J&xxQYmD§kx§k$AO",
    password_repeat: "0&J&xxQYmD§kx§k$Ao",
    result: undefined,
    expected: false,
    failedRule: "1",
    completed: false,
  },
  {
    password: "0#J#xxQYmD#kx#k#AO",
    password_repeat: "0#J#xxQYmD#kx#k#AO",
    result: undefined,
    expected: false,
    failedRule: "6",
    completed: false,
  },
  {
    password: "EY8J62",
    password_repeat: "EY8J62",
    result: undefined,
    expected: false,
    failedRule: "1,2,3",
    completed: false,
  },
  {
    password: "UR9G1GOF",
    password_repeat: "UR9G1GOF",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,4",
    completed: false,
  },
  {
    password: "6BKYT2GY8CX7CFPC",
    password_repeat: "6BKYT2GY8CX7CFPC",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,4",
    completed: false,
  },
  {
    password: "ono53a7suikzb3h7",
    password_repeat: "ono53a7suikzb3h7",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,5",
    completed: false,
  },
  {
    password: "Joifd$3",
    password_repeat: "Joifd$3",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,6",
    completed: false,
  },
  {
    password: "JIOfdsf&fdsflk",
    password_repeat: "JIOfdsf&fdsflk",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,6",
    completed: false,
  },
  {
    password: "qn%5F",
    password_repeat: "qn%5F",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,6",
    completed: false,
  },
  {
    password: "JoFDd#0MY6Ad4",
    password_repeat: "JoFDd#0MY6Ad4",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,4,6",
    completed: false,
  },
  {
    password: "HUIFDSJHKSADN",
    password_repeat: "HUIFDSJHKSADN",
    result: undefined,
    expected: false,
    failedRule: "2,3,4,5,6",
    completed: false,
  },
  {
    password: "omvdsse",
    password_repeat: "omvdsse",
    result: undefined,
    expected: false,
    failedRule: "1,2,3,4,5,6",
    completed: false,
  },
];

function testCase(data) {
  let value;
  let passed = 0;

  // Check every item in the object
  for (i in data) {
    value = data[i].result = checkPassword(
      data[i].password,
      data[i].password_repeat
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
