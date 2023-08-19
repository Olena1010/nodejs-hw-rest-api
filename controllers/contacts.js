const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require('../helpers');

const getAllContacts = async (_, res) => {
	const result = await Contact.find();
	res.json(result);
};

const getContactsById = async (req, res) => {
	const id = req.params.contactId;
    const result = await Contact.findById(id);
	if (!result) {
		throw HttpError(404, 'Not found');
	}
	res.json(result);
};

const addContact = async (req, res) => {
	const result = await Contact.create(req.body);
	res.status(201).json(result);
};

const deleteContactById = async (req, res) => {
	const { id } = req.params;
	const result = await Contact.findByIdAndRemove(id);
	if (!result) {
		throw HttpError(404, 'Not found');
	}
	res.json({
		message: 'contact deleted',
	});
};

const updateContactById = async (req, res) => {
	const { id } = req.params;

	const result = await Contact.findByIdAndUpdate(id, req.body, {
		new: true,
	});

	if (!result) {
		throw HttpError(404, 'Not found');
	}
	res.json(result);
};

const updateContactStatusById = async (req, res) => {
	const { id } = req.params;

	const result = await Contact.findByIdAndUpdate(id, req.body, {
		new: true,
	});

	if (!result) throw HttpError(404);

	res.json(result);
};


module.exports = {
	getAllContacts: ctrlWrapper(getAllContacts),
	getContactsById: ctrlWrapper(getContactsById),
	addContact: ctrlWrapper(addContact),
	deleteContactById: ctrlWrapper(deleteContactById),
	updateContactById: ctrlWrapper(updateContactById),
	updateContactStatusById: ctrlWrapper(updateContactStatusById),
};