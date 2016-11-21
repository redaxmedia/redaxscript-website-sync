#!/usr/bin/env bash

replace 'UA-00000000-0' 'UA-16122280-4' -- build/modules/Analytics/assets/scripts/init.js
replace 'auto' 'demo.redaxscript.com' -- build/modules/Analytics/assets/scripts/init.js

cd build
php console.php config parse --db-url $DB_URL
php console.php status database
rm console.php