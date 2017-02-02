#!/bin/bash

export PATH=/usr/bin:/bin

set -e

virtualenv-3 env
. env/bin/activate
pip install facebookads
