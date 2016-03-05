# meteor-scaffold
A scaffolding tool for Meteor Collections using the ThriveTide Style Guide

Install by typing (while in directory):
`npm install -g .`


How Meteor-Scaffold works:

1. Template files, with the files to be generated go into the templates folder. They use a handlebars-like syntax.
2. The Folder Structure for where Template files get generated into are saved into blueprints.js
3. Meteor-scaffold.js has the main() function of this package. This is where the generator functions which use templates and blueprints.js are called.

TODO:
Move all templates into the template/blueprints pattern
