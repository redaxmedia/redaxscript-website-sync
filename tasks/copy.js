module.exports = function ()
{
	'use strict';

	var config =
	{
		distWebsite:
		{
			src:
			[
				'assets/**',
				'cache/**',
				'database/**',
				'dist/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/Analytics/**',
				'modules/DirectoryLister/**',
				'modules/PageCache/**',
				'modules/SitemapXml/**',
				'modules/SyntaxHighlighter/**',
				'modules/Validator/**',
				'templates/admin/**',
				'templates/default/**',
				'config.php',
				'console.php',
				'index.php',
				'.htaccess'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript/',
			expand: true
		},
		distTemplate:
		{
			src:
			[
				'templates/redaxscript/**'
			],
			dest: 'build',
			cwd: 'vendor/redaxscript/redaxscript-template/',
			expand: true
		}
	};

	return config;
};