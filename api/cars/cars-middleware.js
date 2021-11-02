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
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {checkCarId,}
