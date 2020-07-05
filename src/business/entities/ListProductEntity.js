const Joi = require('joi')
const { Entity, validatorAdapter } = require('speck-entity')
 
const adapter = validatorAdapter('joi', Joi)

class ListProductEntity extends Entity {
  static SCHEMA = {
    id: adapter(Joi.string().required()),
    picture: adapter(Joi.string().required()),
    price: adapter(Joi.number().required()),
    title: adapter(Joi.string().required()),
    free_shipping: adapter(Joi.string().required())
  }
}

export default ListProductEntity