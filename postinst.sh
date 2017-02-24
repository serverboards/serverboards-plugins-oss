#!/bin/bash

set -e

virtualenv-3 env
env/bin/pip install -r requirements.txt
