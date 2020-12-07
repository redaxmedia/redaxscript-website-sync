module.exports = () =>
{
	const config =
	{
		triggerDownload:
		{
			options:
			{
				url: 'https://api.github.com/repos/redaxscript/redaxscript-download-sync/actions/workflows/ci.yml/dispatches'
			}
		},
		triggerGallery:
		{
			options:
			{
				url: 'https://api.github.com/repos/redaxscript/redaxscript-gallery-sync/actions/workflows/ci.yml/dispatches'
			}
		},
		options:
		{
			method: 'POST',
			headers:
			{
				'Accept': 'application/vnd.github.v3+json',
				'Authorization': 'token ' + process.env.TRIGGER_TOKEN,
				'User-Agent': 'redaxscript-website-sync'
			},
			body: JSON.stringify(
			{
				ref: 'master'
			})
		}
	};

	return config;
};
