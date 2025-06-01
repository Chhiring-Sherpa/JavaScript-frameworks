// File System:
// Using fs module (File System) in Node.js

const fs = require('node:fs'); 
//this imports a fs function which is a built in function in node.js.

// readFile => non-blocking function (asynchronous) //utf 8 encoding is used to read the file
// err data => a callback function
fs.readFile('./paragraph.txt', 'utf8', (err, data) => {
    // Handle potential error
    if (err) {
        console.log("Error reading the file:", err);
        return; // stop further execution in case of error
    }

    // Output the file content
    console.log("File Content:\n");
    console.log(data);
});
 