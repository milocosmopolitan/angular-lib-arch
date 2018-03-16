#!/usr/bin/env bash

/usr/bin/expect <<EOF

if [ -z "$NPM_USERNAME" ]; then
    echo npm login requires "NPM_USERNAME environment variable!"
    echo https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html
    exit 1
fi

if [ -z "$NPM_PASSWORD" ]; then
    echo npm login requires "$NPM_PASSWORD environment variable!"
    echo https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html
    exit 1
fi

if [ -z "$NPM_EMAIL" ]; then
    echo npm login requires "$NPM_EMAIL environment variable!"
    echo https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html
    exit 1
fi

set timeout 10
spawn npm login
match_max 100000

expect "Username"
send "$NPM_USERNAME\r"

expect "Password"
send "$NPM_PASSWORD\r"

expect "Email"
send "$NPM_EMAIL\r"

expect {
   timeout      exit 1
   expect eof
}
EOF
