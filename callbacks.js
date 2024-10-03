// callbacks.js

const delayedSuccess = () =>
    setTimeout(() => {
        let success = { message: 'delayed success!' };
        console.log(success);
    }, 500);

const delayedException = () =>
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e.message);
        }
    }, 500);

// New promise functions
function resolvedPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
}

// Example usage:
resolvedPromise()
    .then(message => console.log(message)) // Output: { message: "delayed success!" }
    .catch(error => console.error(error.message));

rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error.message)); // Output: error: delayed exception!
