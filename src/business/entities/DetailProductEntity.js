const Joi = require('joi')
const { Entity, validatorAdapter } = require('speck-entity')

const adapter = validatorAdapter('joi', Joi)

class DetailProductEntity extends Entity {
  static SCHEMA = {
    id: adapter(Joi.string().required()),
    picture: adapter(Joi.string().required()),
    price: adapter(Joi.number().required()),
    title: adapter(Joi.string().required()),
    description: adapter(Joi.string().required()),
    sold_quantity: adapter(Joi.number().required())
  }
}

export default DetailProductEntity
