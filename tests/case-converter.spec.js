var CC = require('../lib/case-converter.js');

describe('Function capitalizeFirst', function() {
  it('should capitalize only the first character in a word', function() {
    var tester = 'asking';
    var correct = 'Asking';
    expect(CC.capitalizeFirst(tester)).toEqual(correct);
  });

  it('should not capitalize first character if its a digit', function() {
    var tester = '1arba';
    var correct = '1arba';
    expect(CC.capitalizeFirst(tester)).toEqual(correct);
  });

  it('should not capitalize the first character in succeeding words', function() {
    var tester = 'this is brutus';
    var correct = 'This is brutus';
    expect(CC.capitalizeFirst(tester)).toEqual(correct);
  });
});

describe('Function capitalizeAll', function() {
  it('should capitalize only the first character in a word', function() {
    var tester = 'asking';
    var correct = 'Asking';
    expect(CC.capitalizeAll(tester)).toEqual(correct);
  });

  it('should not capitalize first character if its a digit', function() {
    var tester = '1arba';
    var correct = '1arba';
    expect(CC.capitalizeAll(tester)).toEqual(correct);
  });

  it('should capitalize the first character in every word', function() {
    var tester = 'this is brutus';
    var correct = 'This Is Brutus';
    expect(CC.capitalizeAll(tester)).toEqual(correct);
  });
});

describe('Function toLowerCase', function() {
  it('should lowercase every alphabet in a word', function() {
    var tester = 'eXtrATerrESTrial';
    var correct = 'extraterrestrial';
    expect(CC.toLowerCase(tester)).toEqual(correct);
  });
});

describe('Function toUpperCase', function() {
  it('should uppercase every alphabet in a word', function() {
    var tester = 'eXtrATerrESTrial';
    var correct = 'EXTRATERRESTRIAL';
    expect(CC.toUpperCase(tester)).toEqual(correct);
  });
});

describe('Function toSnakeCase', function() {
  it('should lowercase every alphabet in a word', function() {
    var tester = 'LoRemiPsUM';
    var correct = 'loremipsum';
    expect(CC.toSnakeCase(tester)).toEqual(correct);
  });

  it('should lowercase every alphabet in a string', function() {
    var tester = 'this Is blaBla BlOOM BrutoOZ';
    var correct = 'this_is_blabla_bloom_brutooz'.replace(/[^a-zA-Z]/g, '');
    var result = CC.toSnakeCase(tester).replace(/[^a-zA-Z]/g, '');
    expect(result).toEqual(correct);
  });

  it('should convert spaces between words into underscores', function() {
    var tester = 'this Is not BruTus';
    var correct = 'this_is_not_brutus';
    expect(CC.toSnakeCase(tester)).toEqual(correct);
  });
});

describe('Function toLowerCamelCase', function() {
  it('should lowercase every alphabet in a word', function() {
    var tester = 'LoRemiPsUM';
    var correct = 'loremipsum';
    expect(CC.toLowerCamelCase(tester)).toEqual(correct);
  });

  it('should uppercase only the first alphabet in second to last word, lowercase the rest', function() {
    var tester = 'this Is blaBla BlOOM BrutoOZ';
    var correct = 'thisIsBlablaBloomBrutooz'.replace(/\ /g, '');
    var result = CC.toLowerCamelCase(tester).replace(/\ /g, '');
    expect(result).toEqual(correct);
  });

  it('should remove all spaces from string with spaces', function() {
    var tester = 'this Is not BruTus';
    var correct = 'thisIsNotBrutus'.split(' ').length;
    var result = CC.toLowerCamelCase(tester).split(' ').length;
    expect(result).toEqual(correct);
  });
});

describe('Function toUpperCamelCase', function() {
  it('should lowercase every alphabet in a word, except the first one', function() {
    var tester = 'LoRemiPsUM';
    var correct = 'Loremipsum';
    expect(CC.toUpperCamelCase(tester)).toEqual(correct);
  });

  it('should uppercase only the first alphabet every word, lowercase the rest', function() {
    var tester = 'this Is blaBla BlOOM BrutoOZ';
    var correct = 'ThisIsBlablaBloomBrutooz'.replace(/\ /g, '');
    var result = CC.toUpperCamelCase(tester).replace(/\ /g, '');
    expect(result).toEqual(correct);
  });

  it('should remove all spaces from string with spaces', function() {
    var tester = 'this Is not BruTus';
    var correct = 'ThisIsNotBrutus'.split(' ').length;
    var result = CC.toUpperCamelCase(tester).split(' ').length;
    expect(result).toEqual(correct);
  });
});
