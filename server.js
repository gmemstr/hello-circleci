// Super
const http = require('http');
const fs = require('fs');

console.log("Starting up server")

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err;
    }
    console.log("Read index file...")

    const server = http.createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    });
    server.listen(8080, () => { console.log("Listening on port 8080") });
});
