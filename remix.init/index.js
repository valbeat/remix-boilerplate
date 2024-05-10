const fs = require("node:fs/promises");
const path = require("node:path");

const main = async ({ rootDirectory }) => {
	await fs.rm(path.join(rootDirectory, ".github"), { recursive: true });
};

module.exports = main;
