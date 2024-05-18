const {processArray, formatArrayStrings} = require('./arrayManipulation');


function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("The length of original names array and modified names are not the same.");
    }


    const userProfiles = originalNames.map((originalName, index) => {
        return {
            ID: index + 1,
            Original_Name: originalName,
            Modified_Name: modifiedNames[index]
        };
    });

    return userProfiles;
}

// Example usage:

// const processedNumberList = processArray([1,2,3]);
// console.log(processedNumberList);
// const originalNames = ['Alice', 'Bob', 'Charlie'];
// const modifiedNames = formatArrayStrings(originalNames, processedNumberList);
// console.log(modifiedNames);
// const userProfiles = createUserProfiles(originalNames, modifiedNames);
// console.log(userProfiles);
