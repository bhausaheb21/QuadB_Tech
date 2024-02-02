const express = require('express');
const CryptoCoins = require('../Models/Coin');

const router = express.Router()

router.get('/', (req, res, next) => {
    let fetchedData;
    const id = req.query.id || null;
    CryptoCoins.findAll()
        .then(data => {
            // console.log(data);
            return res.send(data)
        })
        .catch(err=>{
            console.log(err)
        })
})

router.get('/:id', (req, res, next) => {

    let fetchedData;
    const id = req.params.id;
    CryptoCoins.findByPk(id)
        .then(data => {
            // console.log(data);
            return res.json(data)
        })
        .catch(err=>{
            console.log(err)
        })
})

module.exports = router

// /router.get('/store',(req,res,r))