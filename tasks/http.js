module.exports = () =>
{
	const config =
	{
		triggerDownload:
		{
			options:
			{
				url: 'https://api.travis-ci.org/repo/redaxscript%2Fredaxscript-download-sync/requests'
			}
		},
		triggerGallery:
		{
			options:
			{
				url: 'https://api.travis-ci.org/repo/redaxscript%2Fredaxscript-gallery-sync/requests'
			}
		},
		options:
		{
			method: 'post',
			headers:
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Travis-API-Version': 3,
				'Authorization': 'token ' + process.env.TRAVIS_TOKEN
			}
		}
	};

	return config;
};
