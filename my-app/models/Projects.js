const Sequelize = require('sequelize');

const db = require('../config/db')

const Projects = db.define('restaurantes', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Sequelize.STRING,
    },
    location:{
        type: Sequelize.INTEGER,
    }
})