const errorMessageList = {
	400: "Bad Request",
	401: "Unathorized",
	403: "Forbidden",
	404: "Not found",
	409: "Conflict",	
}

const HttpError = (status, message = errorMessageList[status]) => {
	const error = new Error(message);
	error.status = status;
	throw error;
};

module.exports = HttpError;