const { getAffectedLibs } = require('./utils');

const libs = getAffectedLibs();
console.log('Affected libraries', libs);
console.log(libs.join(' '));
