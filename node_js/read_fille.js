const fs = require('fs');

fs.readFile('demo1.txt', 'utf-8', (err,data) => {
    if (err) {
        console.log("error");
    } else {
        console.log("successful");
    }
});
