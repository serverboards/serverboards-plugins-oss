#!/bin/sh

echo "Installing sudoers file"
sudo cp serverboards.auth.pam.sudoers /etc/sudoers.d/
