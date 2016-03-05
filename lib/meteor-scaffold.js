/**
 * TODO:
 * 1. Allow for multiple fields as inputs dynamically (e.g. name:String, description:String, height:Number)
 * 2. Fill in new/edit pages with basic forms and event code to save time
 */

/* IMPORTS */
var npm = require("npm");
var shell = require('shelljs');
var readlineSync = require('readline-sync');
var generator = require('./generator.js');

function main() {
  //Get Scaffold Names
  var scaffoldName = readlineSync.question('What Scaffold are you making? (Remember to pluralize): ');
  var lowercaseScaffoldName = scaffoldName.toLowerCase();
  var capitalizedScaffoldName = lowercaseScaffoldName.charAt(0).toUpperCase() + lowercaseScaffoldName.slice(1);

  // Run Server Folder File Generators
  generator.generatePublicationFile(scaffoldName);
  generator.generateServerFile(scaffoldName);

  // Run Lib Folder File Generators
  generator.generateRouterFile(scaffoldName);
  generator.generateCollectionFile(scaffoldName);

  // Run Client Folder File Generators
  generator.generateClientIndexJsFile(scaffoldName);
  generator.generateClientIndexHtmlFile(scaffoldName);
  generator.generateClientNewJsFile(scaffoldName);
  generator.generateClientNewHtmlFile(scaffoldName);
  generator.generateClientEditJsFile(scaffoldName);
  generator.generateClientEditHtmlFile(scaffoldName);
}

// Run main
main();
