/**
   Copyright (C) 2015 by David Moreno <dmoreno@serverboards.io>

   This file is based on spice.html from spice-html5.

   spice-html5 is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   spice-html5 is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with spice-html5.  If not, see <http://www.gnu.org/licenses/>.

   --------------------------------------------------
    Spice Javascript client template.
    Refer to main.js for more detailed information
   --------------------------------------------------
*/
/**
  Modified from https://github.com/SPICE/spice-html5
*/

var parse_query_string = function( ) {
    var queryString = window.location.search.slice(1)
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&amp;");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

var sc;

function spice_error(e){
    disconnect();
}

function connect(){
    var uri, password;

    if (sc) {
        sc.stop();
    }

    var query = parse_query_string()
    uri = query['ws_url']
    password = query['password']
    console.log("Connect at "+uri)


    try
    {
        sc = new SpiceMainConn({uri: uri, screen_id: "spice-screen", dump_id: "debug-div",
                    message_id: "message-div",
                    password: password,
                    onerror: spice_error,
                    onagent: agent_connected,
                    onsuccess: function(msg){
                      console.log(msg);
                      if (msg=="Connected")
                        connected(sc)
                      if (msg=="onagent")
                        agent_connected(sc)
                    }
                   });
    }
    catch (e)
    {
        alert(e.toString());
        disconnect();
    }

}

function disconnect(){
    document.getElementById('loading').className="show"
    document.getElementById('loading').innerText="Disconnected."
    console.log(">> disconnect");
    if (sc) {
        sc.stop();
    }
    if (window.File && window.FileReader && window.FileList && window.Blob)
    {
        var spice_xfer_area = document.getElementById('spice-xfer-area');
        document.getElementById('spice-area').removeChild(spice_xfer_area);
        document.getElementById('spice-area').removeEventListener('dragover', handle_file_dragover, false);
        document.getElementById('spice-area').removeEventListener('drop', handle_file_drop, false);
    }
    console.log("<< disconnect");
}

function connected(sc){
  window.spice_connection = this;
  document.getElementById('loading').className="hidden"
}

function agent_connected(sc){
    window.addEventListener('resize', handle_resize);
    window.spice_connection = this;

    resize_helper(this);

    if (window.File && window.FileReader && window.FileList && window.Blob)
    {
        var spice_xfer_area = document.createElement("div");
        spice_xfer_area.setAttribute('id', 'spice-xfer-area');
        document.getElementById('spice-area').appendChild(spice_xfer_area);
        document.getElementById('spice-area').addEventListener('dragover', handle_file_dragover, false);
        document.getElementById('spice-area').addEventListener('drop', handle_file_drop, false);
    }
    else
    {
        console.log("File API is not supported");
    }
}

function main(){
  connect()
}

main()
