//Get necessary node packages & files from this package
var fs = require('fs');
var path = require('path');
var shell = require('shelljs');
var temple = require('text-temple');
var changeCase = require('change-case');
var blueprints = require('./blueprints.js');

//Save where template/.tmpl files are stored
var TEMPLATES_DIRECTORY = 'templates/';

function _generate(blueprint, name) {
  // Get data to inject to template
  var data = blueprint.templateData(name);

  // Get paths for file to be generated
  //Note: Temple is used to change {{vars}} into dynamic names
  var resultDirPath = temple.compileString(blueprint.RESULT_DIRECTORY, data);
  var resultFileName = temple.compileString(blueprint.OUTPUT_FILENAME, data);
  var resultFilePath = path.resolve(resultDirPath, resultFileName);

  // Make result directory (where files will be generated) if it does not exist
  if (!shell.test('-d', resultDirPath)) {
    shell.mkdir('-p', resultDirPath);
  }

  // Get paths for template
  var currentDirPath = __dirname;
  var templateDirPath = TEMPLATES_DIRECTORY;
  var templateFileName = blueprint.TEMPLATE_FILENAME;
  var templateFilePath = path.resolve(currentDirPath, templateDirPath, templateFileName);

  // Get template in string format
  var template = fs.readFileSync(templateFilePath, 'utf8');
  // Compile template
  var content = temple.compileString(template, data);

  // Write to generate the file (write to file system)
  fs.writeFileSync(resultFilePath, content);
}

module.exports = {
  generateCollectionFile: function(name) {
    _generate(blueprints.collection, name);
  },
  generateRouterFile: function(name) {
    _generate(blueprints.router, name);
  },
  generateServerFile: function(name) {
    _generate(blueprints.server, name);
  },
  generatePublicationFile: function(name) {
    _generate(blueprints.publication, name);
  },
  generateClientIndexJsFile: function(name) {
    _generate(blueprints.clientIndexJs, name);
  },
  generateClientNewJsFile: function(name) {
    _generate(blueprints.clientNewJs, name);
  },
  generateClientEditJsFile: function(name) {
    _generate(blueprints.clientEditJs, name);
  },
  generateClientIndexHtmlFile: function(name) {
    _generate(blueprints.clientIndexHtml, name);
  },
  generateClientNewHtmlFile: function(name) {
    _generate(blueprints.clientNewHtml, name);
  },
  generateClientEditHtmlFile: function(name) {
    _generate(blueprints.clientEditHtml, name);
  },
};
