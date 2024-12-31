/* ---- script to help me create all the folders for a new art piece ---- */

// 1- Dependencies
const fs = require('fs');
const path = require('path');

// 2- parse the arguments - make sure we have a title
const args = process.argv.slice(2);
if (args.length === 0) {
	console.log('please provide a new title for the artwork');
	process.exit(1);
}
const artTitle = args.join(' ');

// 3- specify file paths
const dataFilePath = path.join(__dirname, 'data.json');
const artFolderPath = path.join(__dirname, '..', 'art');

// 4- read and parse data file
let data;
try {
	const dataRaw = fs.readFileSync(dataFilePath, 'utf8');
	data = JSON.parse(dataRaw);
} catch (err) {
	console.error('Error reading data.json:', err);
	process.exit(1);
}

// ensure property in data
if (!Array.isArray(data.art)) {
	console.error('data.json format error: "art" should be an array.');
	process.exit(1);
}

// 5- Determine next day folder
let maxNum = 0;
data.art.forEach((item) => {
	const num = parseInt(item.number, 10);
	if (!isNaN(num) && num > maxNum) {
		maxNum = num;
	}
});

const nextNum = maxNum + 1; // update it to match the new entry count

// Format with zero-padding (3 digits => 001, 002, etc.)
const nextNumStr = String(nextNum).padStart(3, '0');

// Construct the folder name: day-XXX
const newFolderName = `day-${nextNumStr}`;
const newFolderPath = path.join(artFolderPath, newFolderName);

// 6- create the folder
if (!fs.existsSync(newFolderPath)) {
	fs.mkdirSync(newFolderPath);
	console.log(`Created folder: ${newFolderName}`);
} else {
	console.error(`Folder already exists: ${newFolderName}`);
	process.exit(1);
}

// --- 7) Create index.html
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${artTitle}</title>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>

  <style>
			body {
				padding: 0;
				margin: 0;
				min-height: 100vh;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			nav {
				margin-bottom: 2rem;
			}

			nav a {
				padding: 0.5rem;
			}

			canvas {
				box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
			}
		</style>
</head>
<body>
  <h1>${artTitle}</h1>
  <script src="./sketch.js"></script>
</body>
</html>
`;

const indexHtmlPath = path.join(newFolderPath, 'index.html');
fs.writeFileSync(indexHtmlPath, indexHtmlContent, 'utf8');
console.log('Created index.html');

// --- 8) Create sketch.js
const sketchJsPath = path.join(newFolderPath, 'sketch.js');
// Here’s an example template:
const sketchTemplate = `
const width = 400;
const height = 400;
const halfW = width / 2;
const halfH = height / 2;

function setup() {
	createCanvas(width, height);
	frameRate(30);
	background(250);
}

function draw() {
  // start drawing
}

`;

fs.writeFileSync(sketchJsPath, sketchTemplate, 'utf8');
console.log('Created sketch.js');

// --- 9) Create thumbnail.gif (empty placeholder or copy from a template if you prefer)
const thumbnailPath = path.join(newFolderPath, 'thumbnail.gif');
// Option A: Create an empty file:
fs.writeFileSync(thumbnailPath, '');
// Option B: Or copy from a placeholder file:
// fs.copyFileSync(path.join(__dirname, 'placeholder.gif'), thumbnailPath);
console.log('Created thumbnail.gif');

// --- 10) Append new entry to data.json => data.art array
const newEntry = {
	number: nextNumStr,
	title: artTitle,
	source: `./art/${newFolderName}`,
	format: 'gif',
	blendMode: 'multiply',
	year: new Date().getFullYear(),
};

data.art.push(newEntry);

// --- 11) Save data.json
try {
	fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
	console.log(`Updated data.json with new art entry: day-${nextNumStr}`);
} catch (err) {
	console.error('Failed to write data.json:', err);
	process.exit(1);
}

console.log('Done!');
