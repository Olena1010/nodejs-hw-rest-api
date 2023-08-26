const Joi = require('joi');

const addContactSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
	favorite: Joi.boolean(),
});
const updateStatus = Joi.object({
	favorite: Joi.boolean().required().messages({
		'any.required': 'missing field "favorite"',
	}),
});

const updateSubscribeSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid("starter", "pro", "business")
    .messages({
      "any.required": "missing field favorite",
      "any.only": "Can be only 'starter', 'pro', 'business'",
    }),
});

module.exports = {
	addContactSchema,
	updateStatus,
	updateSubscribeSchema,
};