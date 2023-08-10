const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err){
     if(err){
        console.log("error in connecting to the server");
     }

     console.log("running on the port:",port);
})