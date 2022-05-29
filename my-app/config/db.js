const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'root', '1234', {
  host: 'localhost',
  dialectb: 'mysql',
  port:'3306',
  operatorsAliases: false,
  define:{
      timestamps:false
  },

  pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
  },

  storage:'path/to/database.sqlite'
});