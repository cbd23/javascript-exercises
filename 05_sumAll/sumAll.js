const sumAll = function(a, b) {

    let sum1 = 0;

    let sum2 = 0;

    if ((a < 0) || (b < 0)) {
        return 'ERROR';
    }

    else if ((typeof a != 'number') || (typeof b != 'number')) {
        return 'ERROR';
    }

    else if (a > b) {
        for (i = b; i <= a; i++) {

            sum2 += parseInt(i);
        }
        return sum2;
    }

    else if (a < b) {
        for (i = a; i <= b; i++) {

            sum1 += parseInt(i);
        }
        return sum1;
    }
};

// Do not edit below this line
module.exports = sumAll;
