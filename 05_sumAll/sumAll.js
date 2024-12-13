const sumAll = function(a, b) {
    let sum = 0;
    let low = 0;
    let high = 0;

    if(a < 0 || b < 0 || a % 1 != 0 || b % 1 != 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR"
    }
    else if(a > b) {
        high = a;
        low = b;
    } else {
        high = b;
        low = a;
    }
    while(low <= high) {
        sum = sum + low;
        low++;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
