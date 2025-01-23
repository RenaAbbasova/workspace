// logger.js
const fs = require('fs');
const path = require('path');

// Define the log file location
const logFilePath = path.join(__dirname, '../logs', 'access.log');

// Create the logs directory if it doesn't exist
if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

// Logger middleware
function logger(req, res, next) {
  const now = new Date().toISOString();
  const logMessage = `${now} - ${req.method} ${req.originalUrl} - ${req.ip}\n`;

  // Write the log message to the access log file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });

  // Log the message to the console for debugging (optional)
  console.log(logMessage.trim());

  next(); // Move to the next middleware or route handler
}

module.exports = logger;
