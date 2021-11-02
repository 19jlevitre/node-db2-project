const express = require('express');
const router = require('express').Router()
const Cars = require('./cars-model.js');

router.get('/', async (req, res, next) => {
    try{
        const cars = await Cars.getAll()
        res.json(cars)
        
    } catch (err) {
        console.log(err)
    }
})

module.exports = router