const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require('../helpers');

const getAllContacts = async (req, res) => {
	const { _id: owner } = req.user;
	const { favorite } = req.query;
	const { page = 1, limit = 10 } = req.query;
	const skip = (page - 1) * limit;
	
	if (favorite) {
    if (favorite !== "true" && favorite !== "false") {
      throw HttpError(404, "Favorite value can only be true or false");
    }
    const result = await Contact.find(
      { owner, favorite },
      "name email phone favorite",
      { skip, limit }
    ).populate("owner", "email subscription");
    res.json(result);
  } else {
    const result = await Contact.find({ owner }, "name email phone favorite", {
      skip,
      limit,
    }).populate("owner", "email subscription");
    res.json(result);
  }
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
	const { _id: owner } = req.user;
	const result = await Contact.create({ ...req.body, owner });
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