

const fs = require('fs');
const path = require('path');

function removeLogFiles() {
    const logDir = path.join(__dirname, 'Logs');
    
    if (fs.existsSync(logDir)) { 
        const files = fs.readdirSync(logDir);
        files.forEach(file => {
            const filePath = path.join(logDir, file);
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${file}`);
        });
        fs.rmdirSync(logDir);
        console.log("Logs directory removed successfully.");
    } else {
        console.log("No Logs directory found.");
    }
}

removeLogFiles();
