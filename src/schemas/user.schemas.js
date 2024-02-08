import Joi from "joi"

export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    cpf: Joi.string().pattern(/^\d{11}$/).required(),
    numberPhone: Joi.number().required()
})

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
})