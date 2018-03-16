#!/usr/bin/env bash

ENV=privtenv

if [ "$NPM_USERNAME" -e ]; then
	echo "You have access!"
else
	echo "ACCESS DENIED!"
fi

cd @common
for lib in *
do
  echo "$lib"
  cd ${lib}
  //npm publish @caf/${lib}
done
