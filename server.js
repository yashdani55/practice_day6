const express = require('express'); //import express framework
const server = express(); //initialisation


server.get('/', function(request, response) {

  console.log(request.method);
  console.log(request.query.query1);
  console.log(request.query.param2);

  console.log(request.response);
  console.log(request.headers);
  console.log(request.url);
  console.log("Value of accept header: ",request.headers.accept);
  console.log(request.url);



  response.send('Hwllo World');
});

server.listen(3000, function name(params) {
  console.log('Server Started...');
})