const { getAffectedLibs } = require('./utils');

const libs = getAffectedLibs();
console.log('libs', libs);
console.log(libs.join(' '));
