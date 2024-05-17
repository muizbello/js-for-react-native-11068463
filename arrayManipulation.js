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
        if(stringArray.length === processedArray.length){
        for(i = 0; i < stringArray.length; i++){
            console.log(i);
            if (processedArray[i] % 2 === 0){
                newArray.push(stringArray[i].toUpperCase());
            }else {
                newArray.push(stringArray[i].toLowerCase());
            }  
        }
        return(newArray); 
    }else{
        return('Your arrays are of different sizes. Function did not compute');
    }
       
};

new0 = processArray([1, 3, 4]);
new1 = formatArrayStrings(['kwaku','jonah','fireship'],new0);
console.log(new1);