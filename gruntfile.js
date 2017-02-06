module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('vendor/redaxmedia/redaxscript/package.json').version,
		shell:
		{
			removeBuild:
			{
				command: 'rm -rf build'
			},
			options:
			{
				stdout: true,
				failOnError: true
			}
		},
		copy:
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
				cwd: 'vendor/redaxmedia/redaxscript/',
				expand: true
			},
			distTemplate:
			{
				src:
				[
					'templates/redaxscript/**'
				],
				dest: 'build',
				cwd: 'vendor/redaxmedia/redaxscript-template/',
				expand: true
			}
		}
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'copy'
	]);
};
