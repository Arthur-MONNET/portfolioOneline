const express = require('express');
const axios = require('axios');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    req.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'))
http.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});





axios.get(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.API_KEY}`)
    .then(response => {
        console.log(response);
        app.get('/getProject', (req,res) => {
            res.send(response.data)
        })

    })
    .catch(error => {
        console.log(error);
    })
