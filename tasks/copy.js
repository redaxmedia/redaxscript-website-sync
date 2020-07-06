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
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/AliasGenerator/**',
				'modules/Analytics/**',
				'modules/CodeEditor/**',
				'modules/Dialog/**',
				'modules/DirectoryLister/**',
				'modules/FormValidator/**',
				'modules/HtmlValidator/**',
				'modules/Gallery/**',
				'modules/PageCache/**',
				'modules/RankSorter/**',
				'modules/Reporter/**',
				'modules/SitemapXml/**',
				'modules/SyntaxHighlighter/**',
				'modules/TextareaResizer/**',
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