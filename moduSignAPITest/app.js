
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    fs.readFile('index.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
})

app.listen(9000, function() {
    console.log("server open at 9000 port");
})