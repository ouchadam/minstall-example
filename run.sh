#! /bin/bash

rm -r node_modules/
rm -r modules/module-1/node_modules/
npm install --no-package-lock
node index.js
