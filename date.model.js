function isWeekend(date) {
	const day = date.getDay();
	return day === 0 || day === 6;
}

function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

module.exports = {
	isWeekend,
	isLeapYear,
};
