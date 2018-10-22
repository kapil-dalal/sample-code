var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../src')));

var httpNodeServer = http.createServer(app).listen(4000, function () {
   console.log('https server listen on localhost:4000')
});

var users = [
   { id: 1, name: 'Kapil', userName: 'a', password: 'a' },
   { id: 2, name: 'Dalal', userName: 'b', password: 'b' }
];

app.post('/login', function (req, res) {
   var params = req.body;
   let isFound = false;
   for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (params.username === user.userName && params.password === user.password) {
         let result = { name: user.name, id: user.id };
         isFound = true;
         res.send(result);
         break;
      }
   }
   if (!isFound) {
      res.status(401).send({ message: 'Username/Password did not match.' });
   }
})
