const convertToCelsius = function(a) {

  const result = (a - 32) * 5/9;

  const roundedResult = Math.round(result * 10) / 10;

  return roundedResult;

};

const convertToFahrenheit = function(b) {

  const result = (b * 1.8) + 32;

  const roundedResult = Math.round(result * 10) / 10;

  return roundedResult;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
