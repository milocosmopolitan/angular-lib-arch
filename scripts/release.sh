#!/usr/bin/env bash

cd @common

npm run npm-login
npm whoami

for lib in *
do
  echo "$lib"
  npm config get @common:registry

  cd ${lib}
  npm publish
  cd ..
done
