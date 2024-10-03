console.log("Running lowerCaseWords.js");


function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject(new Error("Input must be an array."));
        }

        const lowerCaseStrings = arr
            .filter(item => typeof item === 'string') // Filter for strings
            .map(item => item.toLowerCase()); // Convert to lowercase

        resolve(lowerCaseStrings); // Resolve the promise with the result
    });
}

// Example usage:
const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Output: ['pizza', 'wings']
    .catch(error => console.error(error.message));
