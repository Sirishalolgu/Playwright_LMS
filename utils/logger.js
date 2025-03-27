// // import fs from 'fs';
// // import path from 'path';

// // const logFile = path.join(__dirname, 'playwright-bdd.log');

// // export const logger = (message) => {
// //   const log = `[${new Date().toISOString()}] ${message}\n`;
// //   fs.appendFileSync(logFile, log);
// //   console.log(log); // Optional
// // };

// import fs from 'fs';
// import path from 'path';
// import { test } from '@playwright/test';

// const logDir = path.resolve('logs');
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir);
// }

// const logFilePath = path.join(logDir, 'test-log.txt');

// const logMessage = (message) => {
//   const timestamp = new Date().toISOString();
//   fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
// };

// // ✅ Global Hooks
// test.beforeAll(async () => {
//   logMessage('=== Test Suite Started ===');
// });

// test.afterAll(async () => {
//   logMessage('=== Test Suite Finished ===');
// });

// // ✅ Log start of each test
// test.beforeEach(async ({}, testInfo) => {
//   logMessage(`STARTING TEST: ${testInfo.title}`);
// });

// // ✅ Log result after each test
// test.afterEach(async ({}, testInfo) => {
//   const status = testInfo.status === 'failed' ? '❌ FAILED' : '✅ PASSED';
//   logMessage(`FINISHED TEST: ${testInfo.title} | Status: ${status}`);

//   if (testInfo.status === 'failed') {
//     logMessage(`ERROR: ${testInfo.error?.message}`);
//   }
// });

import fs from 'fs';
import path from 'path';

// Create a logs directory if it doesn't exist
const logDir = path.resolve('logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define the log file path
const logFilePath = path.join(logDir, 'test-log.txt');

// Function to log messages
export const logMessage = (message) => {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] ${message}\n`;

  // Append the log to the file
  fs.appendFileSync(logFilePath, log);
  console.log(log); // Optionally print to the console as well
};
