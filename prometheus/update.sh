#!/bin/sh
make txz
# ~/src/serverboards/saas/saas/manage.py package_add saas.txz
# lxc exec test16 s10s plugin install serverboards.saas

#!/bin/bash
#
# L Nix <lornix@lornix.com>
# reload browser window
#
# whether to use SHIFT+CTRL+R to force reload without cache
RELOAD_KEYS="CTRL+R"
#RELOAD_KEYS="SHIFT+CTRL+R"
#
# set to whatever's given as argument
BROWSER="Serverboards - Mozilla Firefox"
#
# get which window is active right now
MYWINDOW=$(xdotool getactivewindow)
#
# bring up the browser
xdotool search --name "${BROWSER}" windowactivate --sync
# send the page-reload keys (C-R) or (S-C-R)
xdotool search --name "${BROWSER}" key --clearmodifiers ${RELOAD_KEYS}
xdotool search --name "${BROWSER}" key --clearmodifiers "Return"
#
# sometimes the focus doesn't work, so follow up with activate
xdotool windowfocus --sync ${MYWINDOW}
xdotool windowactivate --sync ${MYWINDOW}
#
