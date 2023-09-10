const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Orders = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    price: Sequelize.INTEGER,  
    dish:{
        type: Sequelize.STRING,
        
    },
    table:{
        type: Sequelize.STRING,
        
    }
});

module.exports= Orders;