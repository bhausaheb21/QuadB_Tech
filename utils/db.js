const Sequelize = require('sequelize')

const sequelize  =new  Sequelize('QuadB','postgres','your_password',{
    dialect:'postgres',
    host : 'localhost'
})

module.exports = sequelize
