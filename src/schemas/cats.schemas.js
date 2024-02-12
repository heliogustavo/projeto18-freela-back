import Joi from "joi"

export const photoLinkSchema = Joi.object({
    photoLink: Joi.string().uri().required(),
    features: Joi.string().required(),
})