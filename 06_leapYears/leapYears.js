const leapYears = function(year) {

// condition 1 - must be divisible by 4
// condition 2 - if it's a century year, it must also be divisible by 400

   if ((year % 100 == 0) && (year % 400 != 0)) return false;
   
   else if (year % 4 != 0) return false;

   else return true;
};

// Do not edit below this line
module.exports = leapYears;
