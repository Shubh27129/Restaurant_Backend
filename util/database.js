const Sequelize= require('sequelize');

const sequelize= new Sequelize('node-complete', 'root', 'Golu@1999', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports= sequelize;