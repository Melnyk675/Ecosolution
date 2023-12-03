import { object, string } from 'joi';

const validationSchema = object({
  name: string()
    .pattern(/^[^\d]+$/, { name: "alpha", invert: true })
    .required()
    .messages({
      "string.pattern.base": "Wrong Fullname",
      "any.required": "Required",
    }),
  email: string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Wrong Email",
      "any.required": "Required",
    }),
  phone: string()
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
  message: string(),
});

export default validationSchema;
