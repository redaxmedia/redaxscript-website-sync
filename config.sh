#!/usr/bin/env bash

replace 'a.rs-js-track-click, button.rs-js-track-click' 'a.rs-js-track-click, button.rs-js-track-click, label.rs-js-track-click' -- build/modules/Analytics/assets/scripts/init.js
replace 'UA-00000000-0' 'UA-16122280-1' -- build/modules/Analytics/assets/scripts/init.js
replace 'auto' 'redaxscript.com' -- build/modules/Analytics/assets/scripts/init.js
replace 'true' 'rs.registry.secondParameter !== '\''console'\' -- build/modules/SyntaxHighlighter/assets/scripts/init.js
echo sitemap: https://redaxscript.com/sitemap_xml > build/robots.txt

cd build
php console.php config parse --db-url $DB_URL
php console.php status database
rm console.php
mkdir files