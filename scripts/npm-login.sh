#!/usr/bin/env bash

/usr/bin/expect <<EOF
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
