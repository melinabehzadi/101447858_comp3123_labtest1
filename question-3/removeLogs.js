const fs = require('fs');

const path = require('path');

const logsDir = path.join(__dirname, 'Logs');


function removeLogs() {

    if (fs.existsSync(logsDir)) {

        fs.readdirSync(logsDir).forEach(file => {

            const filePath = path.join(logsDir, file);

            fs.unlinkSync(filePath);

            console.log(`Deleted file: ${file}`);
        });

        fs.rmdirSync(logsDir);
        console.log(`Logs directory removed`);

    } else {
        console.log(`No Logs directory found.`);
    }
}



removeLogs();
