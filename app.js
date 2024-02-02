
const express = require('express')
const sequelize = require('./utils/db')
const CryptoCoins = require('./Models/Coin')
const apiRouter = require('./Routes/api')
const path = require('path')

const ejs = require('ejs')
// const CryptoCoins = require('./')

const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


app.use('/api', apiRouter)

app.get('/', (req, res, next) => {
    let fetchedData;
    const id = req.query.id || null;
    CryptoCoins.findAll()
        .then(data => {
            // console.log(data);
            return res.render('index',{data : data})
        })
        .catch(err => {
            console.log(err)
        })
})

//Middleware for inserting a data
// app.use((req,res,next)=>{
//     fetch('https://api.wazirx.com/api/v2/tickers')
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             fetchedData = data;
//             return Promise.resolve(Object.keys(data).slice(0, 10))
//         })
//         .then(keys => {
//             console.log(keys);
//             for (let key of keys) {
//                 // console.log(fetchedData[key]);
//                 const { name, last, buy, sell,volume, base_unit} = fetchedData[key];
//                 CryptoCoins.create({name,last,buy,sell, volume, base_unit});
//             }
//             return Promise.resolve(1)
//         })
//         .then(res => {
//             console.log("Inserted Succesfully");
//         })
//         .catch(err=>{
//             console.log(err);
//         })
// })


CryptoCoins
    .sync()
    .then(res => {
        app.listen(5000, port => {
            console.log("Listening to port 5000");
        })
    })
    .catch(err => {
        console.log(err);
    })