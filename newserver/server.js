const http = require('http');
const fs = require('fs');
const port = 3459;

const myserver = http.createServer((req, res) => {
    const handlereq = (statuscode, filelocation) => {
        fs.readFile(filelocation, (err, data) => {
            if (err) {
                res.writeHead(500, {"content-type": "text/html"});
                res.end("Internal Server Error");
            } else {
                res.writeHead(statuscode, {"content-type": "text/html"});
                res.write(data);
                res.end();
            }
        });
    };

    if (req.url === '/') {
        handlereq(200, "./index.html");
    } else if (req.url === '/about') {
        handlereq(200, "./about.html");
    } else if (req.url === '/contract') {
        handlereq(200, "./contract.html");
    } else {
        handlereq(404, "./error.html");
    }
});

myserver.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
