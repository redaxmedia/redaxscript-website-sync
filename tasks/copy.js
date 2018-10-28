module.exports = () =>
{
	'use strict';

	const config =
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
				'modules/AliasGenerator/**',
				'modules/Analytics/**',
				'modules/DirectoryLister/**',
				'modules/FormValidator/**',
				'modules/HtmlValidator/**',
				'modules/PageCache/**',
				'modules/SitemapXml/**',
				'modules/SyntaxHighlighter/**',
				'modules/TextareaResizer/**',
				'modules/TableSorter/**',
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