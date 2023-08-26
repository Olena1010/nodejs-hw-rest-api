const express = require('express');
const ctrl = require('../../controllers/contacts');
const router = express.Router();
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const schemas = require('../../schemas/contacts');

router.get('/', authenticate, ctrl.getAllContacts);

router.get('/:id', authenticate, isValidId, ctrl.getContactsById);

router.post('/',
	authenticate,
	validateBody(schemas.addContactSchema),
	ctrl.addContact);

router.delete('/:id', authenticate, isValidId, ctrl.deleteContactById);

router.put('/:id',
	authenticate,
	isValidId,
	validateBody(schemas.addContactSchema),
	ctrl.updateContactById,)

router.patch(
	'/:id/favorite',
	authenticate,
	isValidId,
	validateBody(schemas.updateStatus),
	ctrl.updateContactStatusById,
);	


module.exports = router;
