#!/bin/sh

if ! python3 -c "import dateutil, pytz"; then
  virtualenv-3 env
  env/bin/pip install python-dateutil
fi  
