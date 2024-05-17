function processArray(testArray){
    return testArray.map(value => {
        if (value % 2 === 0) {
            return value ** 2;
        } else {
            return value * 3;
        }
    });
};

function formatArrayStrings(stringArray, processedArray){
        newArray = [];
        for(i = 0; i < stringArray.length; i++){
            console.log(i);
            if (processedArray[i] % 2 === 0){
                newArray.push(stringArray[i].toUpperCase());
            }else {
                newArray.push(stringArray[i].toLowerCase());
            }  
        }
         return( newArray);
          
};

new0 = processArray([1,2,3]);
console.log(new0);
new1 = formatArrayStrings(["KWAKU", "Jonah","fireship"], new0);
console.log(new1);