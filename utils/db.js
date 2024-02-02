const Sequelize = require('sequelize')

const sequelize  =new  Sequelize('QuadB','postgres','Lendalb@123#',{
    dialect:'postgres',
    host : 'localhost'
})

module.exports = sequelize