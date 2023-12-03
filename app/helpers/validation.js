import Joi from 'joi';

const validationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[^\d]+$/, { name: "alpha", invert: true })
    .required()
    .messages({
      "string.pattern.base": "Wrong Fullname",
      "any.required": "Required",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Wrong Email",
      "any.required": "Required",
    }),
  phone: Joi.string()
    .pattern(/^\d+$/)
    .min(10)
    .max(12)
    .required()
    .messages({
      "string.pattern.base": "Wrong Phone",
      "string.min": "Wrong Phone",
      "string.max": "Wrong Phone",
      "any.required": "Required",
    }),
  message: Joi.string(),
});

export default validationSchema;

