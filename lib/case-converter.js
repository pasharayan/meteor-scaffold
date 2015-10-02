function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAll(string) {
  var words = string.split(' ');
  var result = capitalizeFirst(words[0]);

  for (var i = 1; i < words.length; i++) {
    result = result + ' ' + capitalizeFirst(words[i]);
  }
  return result;
}

function toLowerCase(string) {
  return string.toLowerCase();
}

function toUpperCase(string) {
  return string.toUpperCase();
}

function toSnakeCase(string) {
  string = string.toLowerCase();
  var words = string.toLowerCase().split(' ');
  var result = words[0];

  for (var i = 1; i < words.length; i++) {
    result = result + '_' + words[i];
  }
  return result;
}

function toLowerCamelCase(string) {
  string = string.toLowerCase();
  var words = string.split(' ');
  var result = words[0];

  for (var i = 1; i < words.length; i++) {
    result = result + capitalizeFirst(words[i]);
  }
  return result
}

function toUpperCamelCase(string) {
  string = string.toLowerCase();
  var result = capitalizeAll(string).replace(/\ /g, '');
  return result;
}

module.exports = {
  capitalizeFirst: capitalizeFirst,
  capitalizeAll: capitalizeAll,
  toLowerCase: toLowerCase,
  toUpperCase: toUpperCase,
  toSnakeCase: toSnakeCase,
  toLowerCamelCase: toLowerCamelCase,
  toUpperCamelCase: toUpperCamelCase,
};
