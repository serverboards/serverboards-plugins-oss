#!/bin/sh

pyvenv env
env/bin/pip install sh pyyaml requests
exec ./setup.py
