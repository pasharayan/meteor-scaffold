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

  // Run the generators
  generator.generateCollectionFile(scaffoldName);
  generator.generateRouterFile(scaffoldName);
  generator.generateServerFile(scaffoldName);
  generator.generatePublicationFile(scaffoldName);
  generator.generateClientIndexJsFile(scaffoldName);

  //Client folder Generators


  //Old Template Generators
  templateGenerate(lowercaseScaffoldName, capitalizedScaffoldName);
}


function makeTemplateHTML(restName, lowercaseScaffoldName, capitalizedScaffoldName) {
  // Get lowercase and capitalized restNames
  var lowercaseRestName = restName.toLowerCase();
  var capitalizedRestName = restName.charAt(0).toUpperCase() + restName.slice(1);

  var templateString =
    '<template name=\'' + lowercaseScaffoldName + capitalizedRestName +'\'>\n' +
    ' \n' +
    '</template>';

  templateString.toEnd(lowercaseScaffoldName + '_' + restName + '.html');
}

function makeTemplateJavascript(restName, lowercaseScaffoldName, capitalizedScaffoldName) {
  // Get lowercase and capitalized restNames
  var lowercaseRestName = restName.toLowerCase();
  var capitalizedRestName = restName.charAt(0).toUpperCase() + restName.slice(1);
  var restScaffoldName = lowercaseScaffoldName + capitalizedRestName;

  var templateJavascript =
    'Template.' + restScaffoldName + '.helpers({\n' +
    '\n' +
    '});' +
    '\n' +
    '\n' +
    'Template.' + restScaffoldName + '.events({\n' +
    '\n' +
    '});' +
    '\n' +
    '\n' +
    'Template.' + restScaffoldName + '.created = function(){\n' +
    '\n' +
    '};' +
    '\n' +
    '\n' +
    'Template.' + restScaffoldName + '.rendered = function(){\n' +
    '\n' +
    '};';

  templateJavascript.toEnd(lowercaseScaffoldName + '_' + restName + '.js');
}

function makeTemplate(restName, lowercaseScaffoldName, capitalizedScaffoldName) {
  // Create restful folder
  var restDirectory = lowercaseScaffoldName + '_' + restName;
  shell.mkdir('-p', restDirectory);
  shell.cd(restDirectory);

  // Create template files
  makeTemplateHTML(restName, lowercaseScaffoldName, capitalizedScaffoldName);
  makeTemplateJavascript(restName, lowercaseScaffoldName, capitalizedScaffoldName);

  // Move back up a directory
  backToRoot(1);
}

function templateGenerate(lowercaseScaffoldName, capitalizedScaffoldName) {
  shell.mkdir('-p', 'client');
  shell.cd('client');
  shell.mkdir('-p', 'templates');
  shell.cd('templates');
  shell.mkdir('-p', lowercaseScaffoldName);
  shell.cd(lowercaseScaffoldName);

  makeTemplate('show', lowercaseScaffoldName, capitalizedScaffoldName);
  makeTemplate('new', lowercaseScaffoldName, capitalizedScaffoldName);
  makeTemplate('edit', lowercaseScaffoldName, capitalizedScaffoldName);

  backToRoot(3);
}

// Helper to move up folder structure
function backToRoot(numberUp) {
  for(i = 0; i < numberUp; i ++){
    shell.cd('..');
  }
}

// Run main
main();
