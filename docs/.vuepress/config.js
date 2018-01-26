const readPkgUp = require('read-pkg-up');

const pkgjson = (readPkgUp.sync()).pkg;

module.exports = {
	title: pkgjson.title,
	description: pkgjson.description,
	base: '/what-is/',
	themeConfig: {
		search: true,
		navbar: true,
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Github',
				link: 'https://github.com/rjoydip/what-is'
			},
		],
		sidebar: [
			['/', 'Tabe of contents']
		],// Assumes GitHub. Can also be a full GitLab url.
		repo: 'rjoydip/what-is',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',
		// if your docs are in a different repo from your main project:
		docsRepo: 'https://rjoydip.github.io/what-is',
		// if your docs are not at the root of the repo:
		docsDir: 'docs',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: 'master',
	}
};
