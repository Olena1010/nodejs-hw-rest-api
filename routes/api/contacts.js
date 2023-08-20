const express = require('express');
const ctrl = require('../../controllers/contacts');
const router = express.Router();
const { validateBody, isValidId } = require('../../middlewares');
const schemas = require('../../schemas/contacts');

router.get('/', ctrl.getAllContacts);

router.get('/:id', isValidId, ctrl.getContactsById);

router.post('/',
	validateBody(schemas.addContactSchema),
	ctrl.addContact);

router.delete('/:id', isValidId, ctrl.deleteContactById);

router.put('/:id',
	isValidId,
	validateBody(schemas.addContactSchema),
	ctrl.updateContactById,)

router.patch(
	'/:id/favorite',
	isValidId,
	validateBody(schemas.updateStatus),
	ctrl.updateContactStatusById,
);	


module.exports = router;
