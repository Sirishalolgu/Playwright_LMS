const fs = require("fs");
const path = require("path");

function readJsonFile(filePath) {
  try {
    const absolutePath = path.resolve(__dirname, filePath); // Resolve absolute path
    const data = fs.readFileSync(absolutePath, "utf-8");
    return JSON.parse(data); // Parse and return the content of the file
  } catch (error) {
    console.error(
      `Error reading or parsing the JSON file at ${filePath}:`,
      error
    );
    return null;
  }
}

module.exports = {
  readJsonFile,
};
