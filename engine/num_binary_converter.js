const num_binary_converter = (num) => {
  if (num % 2 === 0) {
    //is even
    return 0;
  } else {
    return 1;
  }
};
module.exports = { num_binary_converter };
