const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { parseFiles, getAffectedApps, getTouchedProjects } = require('@nrwl/schematics/src/command-line/shared');
const { affectedApps, touchedProjects, ProjectType, dependencies, normalizeProjects } = require('@nrwl/schematics/src/command-line/affected-apps');
const {
  readdir
} = require('fs-extra');

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
}

const hasTouchedProjects = (project, touchedProjects, visisted) => {
  if (touchedProjects.indexOf(project) > -1) return true;
  if (visisted.indexOf(project) > -1) return false;
  return deps[project].map(d => d.projectName).filter(k => hasDependencyOnTouchedProjects(k, touchedProjects, deps, [...visisted, project])).length > 0;
};

const hasDependencyOnTouchedProjects = (project, touchedProjects, deps, visisted) => {
  if (touchedProjects.indexOf(project) > -1) return true;
  if (visisted.indexOf(project) > -1) return false;
  return deps[project].map(d => d.projectName).filter(k => hasDependencyOnTouchedProjects(k, touchedProjects, deps, [...visisted, project])).length > 0;
};

const getAffectedLibs = () => {
  console.log('getAffectedLibs');
  const p = parseFiles(process.argv.slice(3));
  // console.log('p', p);
  const touchedFiles = p.files;
  console.log('touchedFiles', touchedFiles);
  const config = JSON.parse(fs.readFileSync('.angular-cli.json', 'utf-8'));
  const projects = (config.apps ? config.apps : []).map((p) => {

    // ProjectNode = {
    //   name: string;
    //   root: string;
    //   type: ProjectType;
    //   files: string[];
    // };
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
  // projects = normalizeProjects(projects);
  const deps = dependencies(config.project.npmScope, projects, (f) => (fs.readFileSync(f, 'utf-8')));
  const tp = getTouchedProjects(touchedFiles);

  console.log('deps', deps);
  console.log('tp', tp, getTouchedProjects(touchedFiles));
  console.log('projects', projects);
  // if (tp.indexOf(null) > -1) {
  //   return projects.filter(p => p.type === ProjectType.lib).map(p => p.name);
  // } else {
  //   return projects.filter(p => p.type === ProjectType.app).map(p => p.name).filter(name => hasDependencyOnTouchedProjects(name, tp, deps, []));
  // }
  return projects.filter(p => p.type === ProjectType.lib).map(p => p.name).filter(name => tp.includes(name));

  // return getTouchedProjects(touchedFiles);
}

module.exports = {
  getAffectedLibs,
  pexec
};
