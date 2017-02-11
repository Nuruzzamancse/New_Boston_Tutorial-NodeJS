var connect = require('connect');
var http = require('http');

var app = connect();


function profile(request,response) {
    console.log("Request for Pfofile.");
}


function NKNBSNS(request,response) {
    console.log("Request for NKNBSNS");
}

app.use('/profile',profile);

app.use('/nkn',NKNBSNS);

http.createServer(app).listen(8888);
console.log("Server is running........");