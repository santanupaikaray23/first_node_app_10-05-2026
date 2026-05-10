// vaniall javascript - var
// ES6/ECMA Script - const, let 

// var a = 1;
// console.log(a);

const express = require('express');

const app = express();

app.get('/welcome', (req, res) => {
    res.send('Hello World!!!');
});

const PORT = 3400 ;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



