module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		copy: require('./tasks/copy')(grunt),
		shell: require('./tasks/shell')(grunt),
		http: require('./tasks/http')(grunt)
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
		'shell:makeFiles'
	]);
	grunt.registerTask('trigger',
	[
		'http:trigger'
	]);
};
