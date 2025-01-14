const http = require('http');
const myserver = http.createServer((req, res) => {
    res.writeHead(201,{'Content-Type':'text/html'})
    res.write("hi jahid i am your first server");
    res.end();
});
const port = 5100;
const hostname='127.0.0.1'
myserver.listen(port,hostname, () => {
    console.log(`server is running at http://localhost:${port}`);
});
