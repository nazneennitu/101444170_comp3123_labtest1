

const fs = require('fs');
const path = require('path');

function createLogFiles() {
    const logDir = path.join(__dirname, 'Logs');y
    
    if (!fs.existsSync(logDir)) { 
        fs.mkdirSync(logDir); 
        console.log("Logs directory created.");
    }
    
    process.chdir(logDir);
    
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is content for log file number ${i}.`);
        console.log(`Created: ${fileName}`);
    }
}

createLogFiles();
