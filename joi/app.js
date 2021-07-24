const Joi = require("joi")

const product = {
  name:"iPhone X",
  price:20000
}

const productSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  price:Joi.number().min(0).required()
})

const {error} = productSchema.validate(product)

console.log(error);

(async() =>{
  try {
   await productSchema.validateAsync(product)
  } catch (error) {
    console.log(error)
  }
})()