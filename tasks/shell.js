module.exports = () =>
{
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
		configTemplates:
		{
			command:
			[
				'replace \'vendor/redaxscript\' \'..\' -- vendor/redaxscript/redaxscript-template/templates/redaxscript/assets/styles/_redaxscript.css'
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
