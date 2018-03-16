#!/usr/bin/env bash

cd libs
for entry in *
do
  echo "$entry"
  npm publish @caf/${dir}
done
