const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	if ("token" in req.headers) {
		const token = req.headers.token;

		try {
			await jwt.verify(token, "secret");
			next();
		} catch (error) {
			res.sendStatus(401);
		}
	} else res.sendStatus(401);
};
