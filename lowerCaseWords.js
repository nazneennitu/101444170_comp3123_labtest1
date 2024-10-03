function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        
        if (!Array.isArray(mixedArray)) {
            reject(new Error("Input must be an array"));
            return;
        }

      
        const lowerCasedWords = mixedArray
            .filter(item => typeof item === 'string') 
            .map(item => item.toLowerCase()); 

        resolve(lowerCasedWords);
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => {
        console.log("Lowercased words:", result);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
