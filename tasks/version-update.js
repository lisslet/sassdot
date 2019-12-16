const fs = require('fs');

module.exports = gulp => {
	return done => {
		const now = new Date;
		const y   = now.getFullYear();
		const m   = now.getMonth();
		const d   = now.getDate();

		let base = y - 1986;

		if (m > 9 && d > 29) {
			base -= 1;
		}

		const packageJsonFile = process.cwd() + '/package.json';
		const packageJson     = require(packageJsonFile);

		packageJson.version = `${base}.${m + 1}.${d}`;

		fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2));
		done();
	};
};