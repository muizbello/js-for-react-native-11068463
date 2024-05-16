function processArray(testArray){
    return testArray.map(value => {
        if (value % 2 === 0) {
            return value ** 2;
        } else {
            return value * 3;
        }
    });
};
