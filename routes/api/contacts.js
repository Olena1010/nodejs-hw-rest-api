const express = require('express');
const ctrl = require('../../controllers/contacts');
const router = express.Router();
const { validateBody } = require('../../middlewares');
const schemas = require('../../schemas/contacts');

router.get('/', ctrl.getAllContacts);

router.get('/:id', ctrl.getContactsById);

router.post('/',
	validateBody(schemas.addContactSchema),
	ctrl.addContact);

router.delete('/:id', ctrl.deleteContactById);

router.put('/:id',
	validateBody(schemas.addContactSchema),
	ctrl.updateContactById,)

module.exports = router;
