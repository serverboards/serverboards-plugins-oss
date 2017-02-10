#!/bin/sh

if ! python -c "import dateutil"; then
  virtualenv-3 env
  env/bin/pip install python-dateutil
fi  
