const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
   // res.send('<html><body><h1>Hello World</h1></body></html>');
    res.sendFile(__dirname + '/index.html');

});
app.post('/submit-contact-data',(req,res)=>{
    let name = req.body.firstName + " " + req.body.lastName;
    res.send(name + " has submitted contact data");

});
app.put('/update-data',(req,res)=>{
    res.send('PUT request received');

});
app.delete('/delete-data',(req,res)=>{
    res.send('DELETE request received');

});




const server =app.listen(3000);
console.log('Server is running on port 3000');