const Cars = require('./cars-model.js');
const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
  .then(possibleCar => {
    if(possibleCar) {
      req.carFromDb = possibleCar
      next()
    } else {
      res.status(404).json({ message: "car with id <car id> is not found" })
    }
  })
  .catch(err => {
    console.log(err)
  })
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if(!vin) {
    res.status(400).json({ message: `vin is missing` })

  }else if(!make){
    res.status(400).json({ message: `make is missing` })
  }else if(!model){
    res.status(400).json({ message: `model is missing` })
  }else if(!mileage){
    res.status(400).json({ message: `mileage is missing` })
  }
  else{
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {checkCarId, checkCarPayload}
