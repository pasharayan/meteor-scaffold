/**
 *
 *
 *
 *
 *
 * TODO:
 * 1. Allow for multiple fields as inputs dynamically (e.g. name:String, description:String, height:Number)
 * 2. Fill in new/edit pages with basic forms and event code to save time
 */


/* IMPORTS */
var npm = require("npm");
var shell = require('shelljs');
var readlineSync = require('readline-sync');

function main() {
  //Get Scaffold Names
  var scaffoldName = readlineSync.question('What Scaffold are you making? (Remember to pluralize): ');
  var lowercaseScaffoldName = scaffoldName.toLowerCase();
  var capitalizedScaffoldName = lowercaseScaffoldName.charAt(0).toUpperCase() + lowercaseScaffoldName.slice(1);

  //Run the generators
  collectionGenerate(lowercaseScaffoldName, capitalizedScaffoldName);
  publicationGenerate(lowercaseScaffoldName, capitalizedScaffoldName);
  templateGenerate(lowercaseScaffoldName, capitalizedScaffoldName);
  routerGenerate(lowercaseScaffoldName, capitalizedScaffoldName);
  serverGenerate(lowercaseScaffoldName, capitalizedScaffoldName);
}


function collectionGenerate(lowercaseScaffoldName, capitalizedScaffoldName) {
  //Move into collections
  shell.mkdir('-p', 'lib');
  shell.cd('lib');
  shell.mkdir('-p', 'collections');
  shell.cd('collections');

  //Companies = new Mongo.Collection('companies', {

  //Create Files
  var collectionString = (
    capitalizedScaffoldName +
    ' = new Mongo.Collection(\'' +
    lowercaseScaffoldName + '\');'
  );

  collectionString.to(lowercaseScaffoldName + '.js');

  backToRoot(2);
}

function publicationGenerate(lowercaseScaffoldName, capitalizedScaffoldName) {
  //Move into server
  shell.mkdir('-p', 'server');
  shell.cd('server');
  shell.mkdir('-p', 'publications');
  shell.cd('publications');
  shell.mkdir('-p', lowercaseScaffoldName);
  shell.cd(lowercaseScaffoldName);

  // Make Strings for publications
  var publishAllString =
    '\n\nMeteor.publish(\''+ lowercaseScaffoldName + '\', function(){\n' +
      '  return ' + capitalizedScaffoldName +'.find();\n' +
    '});';

  var publishOneString =
    '\n\nMeteor.publish(\''+ lowercaseScaffoldName + 'One\', function(' + lowercaseScaffoldName + 'Id){\n' +
      '  return ' + capitalizedScaffoldName +'.find({_id: ' + lowercaseScaffoldName + 'Id});\n' +
    '});';

  //Write to publications files
  publishAllString.toEnd(lowercaseScaffoldName + '.js');
  publishOneString.toEnd(lowercaseScaffoldName + '.js');

  backToRoot(3);
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

  makeTemplate('index', lowercaseScaffoldName, capitalizedScaffoldName);
  makeTemplate('show', lowercaseScaffoldName, capitalizedScaffoldName);
  makeTemplate('new', lowercaseScaffoldName, capitalizedScaffoldName);
  makeTemplate('edit', lowercaseScaffoldName, capitalizedScaffoldName);

  backToRoot(3);
}
// Make & write route code into the files
function makeRoute(restName, lowercaseScaffoldName, capitalizedScaffoldName) {
  // Get lowercase and capitalized restNames
  var lowercaseRestName = restName.toLowerCase();
  var capitalizedRestName = restName.charAt(0).toUpperCase() + restName.slice(1);

  var routeString;

  // Set the Routes
  if(restName === 'index') {
    routeString =
      '\n\nRouter.route(\'/' + lowercaseScaffoldName + '\', { \n' +
      '  name: \'' + lowercaseScaffoldName + 'Index\', \n' +
      '  waitOn: function(){\n' +
      '    return [\n' +
      '      Meteor.subscribe(\'' + lowercaseScaffoldName + '\'),\n' +
      '    ];\n' +
      '  },\n' +
      '  data: function(){\n' +
      '    return ' + capitalizedScaffoldName + '.find();\n' +
      '  }\n' +
      '});';
    routeString.toEnd(lowercaseScaffoldName + '.js');
  } else if(restName === 'show') {
    routeString =
      '\n\nRouter.route(\'/' + lowercaseScaffoldName + '/:_id\', {\n' +
      '  name: \'' + lowercaseScaffoldName + 'Show\',\n' +
      '  waitOn: function(){\n' +
      '    return [\n' +
      '      Meteor.subscribe(\'' + lowercaseScaffoldName + 'One\', this.params._id),\n' +
      '    ];\n' +
      '  },\n' +
      '  data: function(){\n' +
      '    return ' + capitalizedScaffoldName + '.findOne({_id: this.params._id});\n' +
      '  }\n' +
      '});\n';

    routeString.toEnd(lowercaseScaffoldName + '.js');
  } else {
    routeString =
      '\n\nRouter.route(\'/' + lowercaseScaffoldName + '/:_id/' + lowercaseRestName + '\', {\n' +
      '  name: \'' + lowercaseScaffoldName + capitalizedRestName +'\',\n' +
      '  waitOn: function(){\n' +
      '    return [\n' +
      '      Meteor.subscribe(\'' + lowercaseScaffoldName + 'One\', this.params._id),\n' +
      '    ];\n' +
      '  },\n' +
      '  data: function(){\n' +
      '    return ' + capitalizedScaffoldName + '.findOne({_id: this.params._id});\n' +
      '  }\n' +
      '});\n';

    routeString.toEnd(lowercaseScaffoldName + '.js');
  }
}

// Generate Routes
function routerGenerate(lowercaseScaffoldName, capitalizedScaffoldName) {
  shell.mkdir('-p', 'lib');
  shell.cd('lib');
  shell.mkdir('-p', 'router');
  shell.cd('router');

  makeRoute('index', lowercaseScaffoldName, capitalizedScaffoldName);
  makeRoute('show', lowercaseScaffoldName, capitalizedScaffoldName);
  makeRoute('new', lowercaseScaffoldName, capitalizedScaffoldName);
  makeRoute('edit', lowercaseScaffoldName, capitalizedScaffoldName);

  backToRoot(2);
}

// Make & write server code into the files
function makeServerMethod(methodName, lowercaseScaffoldName, capitalizedScaffoldName){
  var methodString;

  if(methodName === 'create') {
    methodString =
      '\n\n\'' + lowercaseScaffoldName + '/create\': function(data) {\n' +
      '  check(data,{\n' +
      '    name: String,\n'+
      '    description: String,\n' +
      '  });\n' +
      '\n' +
      '  var ' + lowercaseScaffoldName + 'Id  = ' + capitalizedScaffoldName + '.insert(data);\n' +
      '  return ' + lowercaseScaffoldName + 'Id;\n' +
      '},\n';

  } else if (methodName === 'update') {
    methodString =
      '\n\n\'' + lowercaseScaffoldName + '/update\': function(' + lowercaseScaffoldName + 'Id, data) {\n' +
      '  check(' + lowercaseScaffoldName + 'Id, String)\n' +
      '  check(data,{\n' +
      '    name: String,\n'+
      '    description: String,\n' +
      '  });\n' +
      '\n' +
      '  var result  = ' + capitalizedScaffoldName + '.update('+ lowercaseScaffoldName +'Id, {$set: data});\n' +
      '  return result; \n' +
      '},\n';

  } else if(methodName === 'destroy') {
    methodString =
      '\n\n\'' + lowercaseScaffoldName + '/destroy\': function(' + lowercaseScaffoldName + 'Id, data) {\n' +
      '  check(' + lowercaseScaffoldName + 'Id, String)\n' +
      '  var result  = ' + capitalizedScaffoldName + '.remove('+ lowercaseScaffoldName +'Id);\n' +
      '  return result; \n' +
      '},\n';
  }

  methodString.toEnd(lowercaseScaffoldName + '.js');
}

// Generate Server Methods
function serverGenerate(lowercaseScaffoldName, capitalizedScaffoldName) {
  //Move into server
  shell.mkdir('-p', 'server');
  shell.cd('server');
  shell.mkdir('-p', 'methods');
  shell.cd('methods');
  shell.mkdir('-p', lowercaseScaffoldName);
  shell.cd(lowercaseScaffoldName);

  var serverBeginningString = 'Meteor.methods({ \n';
  serverBeginningString.toEnd(lowercaseScaffoldName + '.js');

  makeServerMethod('create', lowercaseScaffoldName, capitalizedScaffoldName);
  makeServerMethod('update', lowercaseScaffoldName, capitalizedScaffoldName);
  makeServerMethod('destroy', lowercaseScaffoldName, capitalizedScaffoldName);

  var serverEndString = '\n});';
  serverEndString.toEnd(lowercaseScaffoldName + '.js');

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
