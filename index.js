var http = require('http');

http.createServer( function(req,res) {
    res.end(`
        <script>
            function test(verb) {
                var req = new XMLHttpRequest();
                req.open(verb, 'http://localhost:8081');
                req.onload = function() { console.log(req.response) };
                req.onerror = function() { console.log(verb + ' failed') };
                req.send();
            }
            ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].forEach(test);
        </script>
    `);
}).listen(8080);


http.createServer( function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
    }
    res.end("Hello from 8081 (" + req.method + ")");
}).listen(8081);


require('phantom').create()
    .then( phantom => phantom.createPage() )
    .then( page => {
        page.property('onConsoleMessage', function(msg) {
            console.log(msg)
        });
        page.open('http://localhost:8080');
    });
