const dateModel = require('./date.model.js');
const isWeekend = async (req, res) => {
	const { date } = req.body;
	try {
		const result = await dateModel.isWeekend(date);
		res.json({
			data: result,
			error: null,
		});
	} catch (e) {
		res.json({
			data: null,
			error: e.message,
		});
	} finally {
		res.end();
	}
};

const isLeapYear = async (req, res) => {
	const { year } = req.body;
	try {
		const result = await dateModel.isLeapYear(year);
		res.json({
			data: result,
			error: null,
		});
	} catch (e) {
		res.json({
			data: null,
			error: e.message,
		});
	} finally {
		res.end();
	}
};

module.exports = {
	isWeekend,
	isLeapYear,
};
