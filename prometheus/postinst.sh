#!/bin/sh

python3 -m venv env
env/bin/pip install sh pyyaml asks requests curio smock
exec ./setup.py
