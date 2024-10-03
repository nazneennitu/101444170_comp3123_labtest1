// remove.js

const fs = require('fs');
const path = require('path');

function removeLogFiles() {
    const logDir = path.join(__dirname, 'Logs'); // Define path to Logs directory
    
    if (fs.existsSync(logDir)) { // Check if directory exists
        const files = fs.readdirSync(logDir); // Read all files in the directory
        files.forEach(file => {
            const filePath = path.join(logDir, file);
            fs.unlinkSync(filePath); // Delete each file
            console.log(`Deleted: ${file}`); // Log deleted file
        });
        fs.rmdirSync(logDir); // Remove the Logs directory
        console.log("Logs directory removed successfully.");
    } else {
        console.log("No Logs directory found.");
    }
}

removeLogFiles();
