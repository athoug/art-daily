// a file to help me with some automations

const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

const addDateToData = () => {
	let data;
	try {
		const rawData = fs.readFileSync(dataFilePath, 'utf8');
		data = JSON.parse(rawData);
	} catch (err) {
		console.error(err);
		console.error('Error reading data.json:', err);
		process.exit(1);
	}

	data.art.forEach((item) => {
		item.year = 2023;
	});

	console.log(data);

	try {
		fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
	} catch (err) {
		console.error(err);
		console.error('Error writing data.json:', err);
		process.exit(1);
	}
};
