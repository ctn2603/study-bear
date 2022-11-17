module.exports = async (req, res, next) => {
	if ("email" in req.body) {
		const email = req.body.email;
		isValidFormat = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(
			email.toLowerCase()
		);

		if (isValidFormat) next();
		else res.status(401).send("invalid email format");
	} else {
		res.status(401).send("email is missing");
	}
};
