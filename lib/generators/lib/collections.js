var Temple = require('text-temple');
var Shell = require('shelljs');

function generate(collectionName) {
  // Create collections directory if does not exist yet
  if (Shell.test('-d', './lib/collections')) {
    Shell.mkdir('-p', './lib/collections');
  }

  // Generate content string to be put to file
  var content = Temple.compileString();
}
