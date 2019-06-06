module.exports = () =>
{
	'use strict';

	const config =
	{
		configDatabase:
		{
			command:
			[
				'cd build',
				'php console.php config parse --db-url $DB_URL --halt-on-error',
				'php console.php status database'
			]
			.join('&&')
		},
		configModules:
		{
			command:
			[
				'replace \'a.rs-js-track-click, button.rs-js-track-click\' \'a.rs-js-track-click, button.rs-js-track-click, label.rs-js-track-click\' -- build/modules/Analytics/assets/scripts/init.js',
				'replace \'UA-00000000-0\' \'UA-16122280-1\' -- build/modules/Analytics/assets/scripts/init.js',
				'replace \'auto\' \'redaxscript.com\' -- build/modules/Analytics/assets/scripts/init.js',
				'echo sitemap: https://redaxscript.com/module/sitemap-xml > build/robots.txt'
			]
			.join('&&')
		},
		configFiles:
		{
			command:
			[
				'cd build',
				'mkdir _download',
				'mkdir _gallery'
			]
			.join('&&')
		},
		removeConsole:
		{
			command:
			[
				'cd build',
				'rm console.php'
			]
			.join('&&')
		},
		removeBuild:
		{
			command: 'rm -rf build'
		},
		options:
		{
			stdout: true,
			failOnError: true
		}
	};

	return config;
};
