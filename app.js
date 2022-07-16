var express = require('express');
const fs = require('fs');
const cors = require('cors');
const order = require('./orders');
var bodyParser = require('body-parser');
var app = express();
port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors({
    origin: ['http://localhost:4200',
        "https://navtech-oms.netlify.app"
    ]
}));

app.get('/login', (req, res) => {
    fs.readFile("./assets/users.json", function(err, data) {
        if (err) throw err;
        // const users = JSON.parse(data);
        res.send(JSON.parse(data));
    });
})
app.get('/getCustomers', (req, res) => {
    fs.readFile("./assets/customers.json", function(err, data) {
        if (err) throw err;
        const customers = JSON.parse(data);
        res.send(customers);
    });
})
app.post('/addOrder', (req, res) => {
    order.addOrder(req.body).then((response) => {
        res.send(response);
    });
})
app.put('/editOrder', (req, res) => {
    order.editOrder(req.body).then((response) => {
        res.send(response);
    });
})
app.post('/deleteOrder', (req, res) => {
    order.deleteOrder(req.body.id).then((response) => {
        res.send(response);
    });
})
app.listen(port, function() {
    console.log("App listening on port " + port);
});