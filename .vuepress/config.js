const readPkgUp = require('read-pkg-up');

const pkgjson = (readPkgUp.sync()).pkg;

module.exports = {
	title: pkgjson.title,
	description: pkgjson.description,
	base: '/what-is/',
	themeConfig: {
		navbar: false,
		sidebar: [
			['/',  'Home']
		],
	}
};
