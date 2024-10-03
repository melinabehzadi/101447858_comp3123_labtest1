function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(array)) {
            const filteredWords = array
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase());
            resolve(filteredWords);
        } else {
            reject(new Error("Input is not an array"));
        }
    });
}

// example
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
