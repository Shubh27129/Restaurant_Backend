const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize= require('./util/database')

var cors= require('cors')

const ordersRoutes = require('./routes/orders');

const app = express();

app.use(cors())

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/orders', ordersRoutes)

sequelize.sync().then(result=>{
    app.listen(4000);
}).catch(err => console.log(err))