const removeFromArray = function(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j <= arguments.length; j++) {
            if(arguments[j] === array[i]) {
                array.splice(i, 1);
                i = 0;
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
