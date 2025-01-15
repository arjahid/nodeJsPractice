const http = require("http");
const fs = require("fs");
const port = 3400;

const myserver = http.createServer((req, res) => {
    const handlereq = (statuscode, filelocation) => {
        fs.readFile(filelocation, (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/html" });
                res.end("server is connecting error");
            } else {
                res.writeHead(statuscode, { "content-type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    }

    if (req.url === '/') {
        handlereq(200, 'index.html');
    } else if (req.url === '/about') {
        handlereq(200, 'about.html');
    } else if (req.url === '/contact') {
        handlereq(200, 'contact.html');
    } else if (req.url === '/blog') {
        handlereq(200, 'blog.html');
    } else {
        handlereq(400, 'error.html');
    }
    
});

myserver.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
