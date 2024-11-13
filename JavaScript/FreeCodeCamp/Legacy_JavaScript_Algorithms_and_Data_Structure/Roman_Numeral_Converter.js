function convertToRoman(num) {
  let romanNumerals = "";

  const matrix = [
    {
      numeral: "M",
      value: 1000,
    },
    {
      numeral: "CM",
      value: 900,
    },
    {
      numeral: "D",
      value: 500,
    },
    {
      numeral: "CD",
      value: 400,
    },
    {
      numeral: "C",
      value: 100,
    },
    {
      numeral: "XC",
      value: 90,
    },
    {
      numeral: "L",
      value: 50,
    },
    {
      numeral: "XL",
      value: 40,
    },
    {
      numeral: "X",
      value: 10,
    },
    {
      numeral: "IX",
      value: 9,
    },
    {
      numeral: "V",
      value: 5,
    },
    {
      numeral: "IV",
      value: 4,
    },
    {
      numeral: "I",
      value: 1,
    },
  ];

  for (let i = 0; i < 13; i++) {
    if (matrix[i].value <= num) {
      num = num - matrix[i].value;
      romanNumerals += matrix[i].numeral;
      if (matrix[i].value <= num) {
        i--;
      }
    }
  }
  return romanNumerals;
}

console.log(convertToRoman(23));
