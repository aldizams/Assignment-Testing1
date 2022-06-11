const httpMocks = require('node-mocks-http');
const dateModel = require('./date.model.js');
const dateHandler = require('./date.js');

jest.mock('./date.model.js', () => {
	return {
		isWeekend: jest.fn(),
		isLeapYear: jest.fn(),
	};
});

test('[mock] data returned always saturday', async () => {
	const request = httpMocks.createRequest({
		method: 'POST',
		url: '/isWeekend',
		body: {
			date: new Date().getDay(),
		},
	});
	const response = httpMocks.createResponse();
	dateModel.isWeekend.mockResolvedValue(true);
	await dateHandler.isWeekend(request, response);
	expect(response.statusCode).toEqual(200);
	expect(response._getJSONData()).toEqual({
		data: true,
		error: null,
	});
});

test('[mock] data always return 2024', async () => {
	const request = httpMocks.createRequest({
		method: 'POST',
		url: '/isLeapYear',
		body: {
			year: new Date().getFullYear(),
		},
	});
	const response = httpMocks.createResponse();
	dateModel.isLeapYear.mockResolvedValue(true);
	await dateHandler.isLeapYear(request, response);
	expect(response.statusCode).toEqual(200);
	expect(response._getJSONData()).toEqual({
		data: true,
		error: null,
	});
});
