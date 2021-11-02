const express = require('express');
const router = require('express').Router()
const Cars = require('./cars-model.js');
const { checkCarId, checkCarPayload } = require('./cars-middleware.js');

router.get('/', async (req, res, next) => {
    try{
        const cars = await Cars.getAll()
        res.json(cars)
        
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.carFromDb);
})

router.post('/', checkCarPayload, (req,res,next) => {

    Cars.create(req.body)
    .then(newCar => {
        res.status(201).json(newCar);
    }).catch(next)
})

module.exports = router