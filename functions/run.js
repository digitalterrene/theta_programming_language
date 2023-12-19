const { char_digit_mapper } = require("../engine/char_digit_mapper");
const { num_binary_converter } = require("../engine/num_binary_converter");
const run = (input) => {
  const return_data = char_digit_mapper(input);
  let mo_array = [];
  return_data.forEach((element) => {
    if (element?.bin) {
      mo_array.push(element?.bin);
    }
  });
  return return_data;
};

module.exports = { run };
