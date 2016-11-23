#!/usr/bin/env bash

replace 'UA-00000000-0' 'UA-16122280-1' -- build/modules/Analytics/assets/scripts/init.js
replace 'auto' 'redaxscript.com' -- build/modules/Analytics/assets/scripts/init.js
replace '0000000000000000000000' 'RHRZD6JfTlizKGb2EZMEFA' -- build/modules/Experiments/Config.php
echo sitemap: https://redaxscript.com/sitemap_xml > build/robots.txt

cd build
php console.php config parse --db-url $DB_URL
php console.php status database
rm console.php
mkdir files