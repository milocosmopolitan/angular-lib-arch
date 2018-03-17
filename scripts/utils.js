const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { parseFiles, getTouchedProjects } = require('@nrwl/schematics/src/command-line/shared');
const { ProjectType} = require('@nrwl/schematics/src/command-line/affected-apps');

const pexec = (cmd) =>
  new Promise((res, rej) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        rej(stderr);
      } else {
        res(stdout);
      }
    })
  });

const allFilesInDir = (dirName) => {
  var res = [];
  fs.readdirSync(dirName).forEach(function (c) {
    var child = path.join(dirName, c);
    try {
      if (!fs.statSync(child).isDirectory()) {
        res.push(child);
      }
      else if (fs.statSync(child).isDirectory()) {
        res = res.concat(allFilesInDir(child));
      }
    }
    catch (e) { }
  });
  return res;
};

const getAffectedLibs = () => {
  const p = parseFiles(process.argv.slice(3));
  const touchedFiles = p.files;
  const config = JSON.parse(fs.readFileSync('.angular-cli.json', 'utf-8'));
  const projects = (config.apps ? config.apps : []).map((p) => {
    return {
      name: p.name,
      type: p.root.startsWith('libs/')
        ? ProjectType.lib
        : p.root.startsWith('apps/')
          ? ProjectType.app : null,
      root: p.root,
      files: allFilesInDir(path.dirname(p.root))
    };
  });
  if (!config.project.npmScope) {
    throw new Error(".angular-cli.json must define the npmScope property.");
  }
  // const deps = dependencies(config.project.npmScope, projects, (f) => (fs.readFileSync(f, 'utf-8')));
  const tp = getTouchedProjects(touchedFiles);
  return projects.filter(p => p.type === ProjectType.lib)
    .map(p => p.name)
    .filter(name => tp.includes(name));
};

module.exports = {
  getAffectedLibs,
  pexec
};
