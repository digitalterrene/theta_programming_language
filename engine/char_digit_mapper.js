const {
  mathematical_operators,
  digits,
  spaces,
  special_characters,
  uppercase_letters,
  lowercase_letters,
  symbols,
} = require("../data_types/chars");
const { num_binary_converter } = require("./num_binary_converter");

function categorize_char(input) {
  // Convert input string to an array of characters
  const input_array = input.split("");
  const categories = [
    { name: "Mathematical Operator", array: mathematical_operators },
    { name: "Digit", array: digits },
    { name: "Space", array: spaces },
    { name: "Special Character", array: special_characters },
    { name: "Uppercase Letter", array: uppercase_letters },
    { name: "Lowercase Letter", array: lowercase_letters },
    { name: "Symbol", array: symbols },
  ];

  let results = [];
  let v_m_c = [];
  for (const char of input_array) {
    for (const category of categories) {
      const index = category.array.indexOf(char);
      if (index !== -1) {
        const binary = num_binary_converter(index);
        results.push({
          numbin: index,
          mo: category.name,
          sym: char,
          bin: binary,
        });
        v_m_c.push(binary);
        break; // Break out of the inner loop once a category is found
      }
      // if (index !== -1) {
      //   results.push({
      //     index,
      //     char,
      //     category: category.name,
      //   });
      //   v_m_c.push(index);
      //   break; // Break out of the inner loop once a category is found
      // }
    }
  }
  // Default case for characters not found in any category
  if (results.length === 0) {
    results.push({
      index: -1,
      char: input_array.join(""),
      category: "Uncategorized",
    });
  }
  return results;
}
const char_digit_mapper = (char) => {
  const result = categorize_char(char);
  return result;
};

module.exports = { char_digit_mapper };
