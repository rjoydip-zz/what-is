const path = require('path')
const shell = require('shelljs');

const join = path.join;
const src = __dirname;
const dist = join(__dirname, 'docs');

if (!shell.which('git')) {
	shell.echo('Sorry, this script requires git');
	shell.exit(1);
}

shell.rm('-rf', 'docs');
shell.mkdir('-p', join(src, 'docs'));
shell.cp('-R', join(src, '.vuepress'), join(dist, '.vuepress'));
shell.cp('-R', join(src, 'README.md'), join(dist, 'README.md'));
shell.echo('docs re-created');
shell.exec('npm run docs:dev', {async:true})
