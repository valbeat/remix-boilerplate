const fs = require("node:fs/promises");
const path = require("node:path");

const main = async ({ rootDirectory }) => {
	await Promise.all([
		fs.rm(path.join(rootDirectory, ".github"), { recursive: true }),
	]);
};

module.exports = main;
