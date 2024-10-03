// add.js

const fs = require('fs');
const path = require('path');

function createLogFiles() {
    const logDir = path.join(__dirname, 'Logs'); // Define path to Logs directory
    
    if (!fs.existsSync(logDir)) { // Check if directory does not exist
        fs.mkdirSync(logDir); // Create Logs directory
        console.log("Logs directory created.");
    }
    
    process.chdir(logDir); // Change current process to Logs directory
    
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`; // Create file name
        fs.writeFileSync(fileName, `This is content for log file number ${i}.`); // Write content to file
        console.log(`Created: ${fileName}`); // Log created file
    }
}

createLogFiles();
