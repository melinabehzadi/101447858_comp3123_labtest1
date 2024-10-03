// resolvedPromise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { message: 'resolved: delayed success!' };
            resolve(success);
        }, 500);
    });
};




// rejectedPromise
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            try {
                throw new Error('rejected: delayed exception!');
            } catch (e) {
                reject(e);
            }
        }, 500);
    });
};



// calling promises
resolvedPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));


rejectedPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error(error.message));
