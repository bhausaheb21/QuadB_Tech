const sequelize = require('../utils/db')
const Sequelize = require('sequelize')


const CryptoCoins = sequelize.define('CryptoData',{
    id :{
        primaryKey : true,
        autoIncrement : true,
        allowNull : false,
        type : Sequelize.DataTypes.INTEGER
    },
    name:{
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },

    last :{
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false
    },
    buy :{
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false
    },
    sell:{
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false   
    },
    volume :{
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false
    },
    base_unit :{
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    }
})

module.exports = CryptoCoins