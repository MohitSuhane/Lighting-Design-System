var copydir = require('copy-dir');
const path = require('path');	

var TO_DIR = path.resolve(__dirname + '/node_modules/@salesforce-ux/design-system/assets');
var FROM_DIR = path.resolve(__dirname + '/src/assets');
 
copydir.sync(TO_DIR, FROM_DIR);