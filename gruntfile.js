module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		copy: require('./tasks/copy')(grunt),
		ftpress: require('./tasks/ftpress')(grunt),
		http: require('./tasks/http')(grunt),
		shell: require('./tasks/shell')(grunt)
	});

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'copy'
	]);
	grunt.registerTask('config',
	[
		'shell:configDatabase',
		'shell:configModules',
		'shell:configFiles'
	]);
	grunt.registerTask('lock',
	[
		'shell:removeConsole'
	]);
	grunt.registerTask('deploy',
	[
		'ftpress:deploy'
	]);
	grunt.registerTask('trigger',
	[
		'http:trigger'
	]);
};
