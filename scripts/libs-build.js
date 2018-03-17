const { getAffectedLibs, pexec } = require("./utils");

const buildLibs = async (apps, rest) => {
  if (apps.length > 0) {
    console.log("Building " + apps.join(', '));
    for (app of apps) {
      await pexec("./node_modules/.bin/ng-packagr -p libs/" + app + "/package.json", { stdio: [0, 1, 2]});
    }
  }
  else {
    console.log('No apps to build');
  }
};

const libs = getAffectedLibs();
buildLibs(libs, {});
console.log('libs', libs);
console.log(libs.join(' '));
