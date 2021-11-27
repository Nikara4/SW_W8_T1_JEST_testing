const sum = (a, b) => {
  return typeof a !== typeof b ? NaN : a + b;
};

module.exports = sum;
