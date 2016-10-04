'strict mode'
var rpc = Serverboards.rpc
var Flash = Serverboards.Flash
var plugin = Serverboards.plugin

function main(element, config){
  var hostname = "localhost"
  var port = 8080
  var ws_uuid, ssh_id, spice_port

  rpc.call("plugin.start",["serverboards.core.ssh/daemon"]).then((ssh) => {
      ssh_id = ssh
      return rpc.call(ssh+".open_port", {url: config.service.config.via.config.url || "localhost", hostname: "localhost", port: config.service.config.port || 5900 })
    }).then( (port) => {
      console.log("Opened port %o -> localhost:%o", port, config.service.config.port)
      spice_port = port
      return rpc.call("http.add_port", [port])
    }).then( (uuid) => {
      console.log("Connect to ws %o", uuid)
      ws_uuid = uuid
    }).then(() =>
      plugin.load("serverboards.spice/spice-web-client.js")
    ).then(() => {

      // Monkey patch, I want my url
      wdi.Utils.generateWebSocketUrl = function(protocol, host, port, destHost, destPort, type, destInfoToken) {
        return rpc.url+"/"+ws_uuid
      }
      // Create connection
      var app = new Application();
      $(window)['resize'](function () {
        app.sendCommand('setResolution', {
          'width': $(window).width(),
          'height': $(window).height()
        });
      });
      app.run({
        'callback': spice_callback,
    		'context': this,
    		'host': '10.11.12.100',
    		'port': 8000,
    		'protocol': 'ws',
    		'token': '1q2w3e4r',
    		'vmHost': false,
    		'vmPort': false,
    		'useBus': false,
    		'busHost': '10.11.12.200',
    		'busPort': 61613,
    		'busSubscriptions': ['/topic/00000000-0000-0000-0000-000000000000'],
    		'busUser': '00000000-0000-0000-0000-000000000000',
    		'busPass': 'potato',
            // Connection Control
    		'connectionControl': false,
            'heartbeatToken': 'heartbeat',
    		'heartbeatTimeout': 4000,//miliseconds
    		'busFileServerBaseUrl': 'https://10.11.12.200/fileserver/',
    		'layout': 'es',
    		'clientOffset': {
    			'x': 0,
    			'y': 0
    		},
    		'useWorkers': true,
    		'seamlessDesktopIntegration': false,
    		'externalClipboardHandling': false,
    		'disableClipboard': true,
    		'layer': $(element).find('#spice')[0],
    		'vmInfoToken': null
      })
    })

    return () => {
      rpc.call(ssh_id+".close_port", [spice_port]).then(() => {
        console.log("Closing spice connection")
      })
    }
}

const actions={
  error: function(params){
    console.error("Error: %o", params)
    if (params==3){
      Flash.error("Error connecting")
      $('#spice').text("Error connecting.").addClass('ui message error')
    }
    else{
      Flash.error("Error on spice connection: "+String(params))
    }
  }
}

var spice_callback = function (action, params) {
  if (actions[action])
    return actions[action](params)

  console.log("Got action: %o", action)
  if (action == 'windowClosed') {
    $(params.canvas).remove();
    $(params.eventLayer).remove();
  } else if (action == 'windowMoved') {
    $(params.canvas).css({
      'top': params.info.top + 'px',
      'left': params.info.left + 'px'
    });
    $(params.eventLayer).css({
      'top': params.info.top + 'px',
      'left': params.info.left + 'px'
    });
  } else if (action == 'init' || action == 'windowCreated') {
    var item = null;
    var canvas = null;
    var eventlayer = null;
    var body = $('body');

    for (var i in params) {
      item = params[i];
      var position = item.position * 2;
      canvas = $(item.canvas).css({
        'zIndex': 10000 - position - 1,
        'position': 'absolute',
        'top': item.info.top + 'px',
        'left': item.info.left + 'px'
      });
      eventlayer = $(item.eventLayer).css({
        'top': item.info.top + 'px',
        'left': item.info.left + 'px',
        'zIndex': 10000 - position
      })
      body.append(canvas);
      body.append(eventlayer);
    }
  } else if (action == 'ready') {
    var width = $(window).width();
    var height = $(window).height();

    app.sendCommand('setResolution', {
      'width': width,
      'height': height
    });
    if (wdi.IntegrationBenchmarkEnabled) {
      $('#integrationBenchmark').css({'display': 'inline'});
      $('#launchWordButton').prop('disabled', false);
    }
  } else if (action == 'resolution') {

  } else if (action == 'windowMinimized') {
    //in eyeos, this should minimize the window, not close it
    $(params.canvas).css({'display': 'none'});
    $(params.eventLayer).css({'display': 'none'});
  } else if (action == 'windowMaximized') {
    $(params.canvas).css({
      'top': params.info.top + 'px',
      'left': params.info.left + 'px'
    });
    $(params.eventLayer).css({
      'top': params.info.top + 'px',
      'left': params.info.left + 'px'
    });
  } else if (action == 'windowRestored') {
    //in eyeos, this should restore the window
    $(params.canvas).css({'display': 'block'});
    $(params.eventLayer).css({'display': 'block'});
    $(params.canvas).css({
      'top': params.info.top + 'px',
      'left': params.info.left + 'px'
    });
    $(params.eventLayer).css({
      'top': params.info.top + 'px',
      'left': params.info.left + 'px'
    });
  } else if (action == 'windowFocused') {
    //debugger; //eyeos should move the window to front!
  } else if (action == 'timeLapseDetected') {
    wdi.Debug.log('Detected time lapse of ', params, 'seconds');
  } else if (action == 'error') {
//                      alert('error');
  } else if ("checkResults") {
    var cnv = $('#canvas_0')[0];
    var ctx = cnv.getContext('2d');
    var currentImgData = ctx.getImageData(0, 0, cnv.width, cnv.height);
    var currArr = new Uint32Array(currentImgData.data.buffer);
    var firstArr = new Uint32Array(firstImageData);

    var errors = 0;
    var l = firstArr.length;
    do {
      if (firstArr[l] !== currArr[l] ) {
        errors++;
        console.log("FAIL!!!!!!!!!!!!!", l , ~~(l/1920), l%1920, parseInt(firstArr[l]).toString(2), parseInt(currArr[l]).toString(2));
        currArr[l] = (255 << 24) | 255; //RED
      }
    } while (l--);

    ctx.putImageData(currentImgData, 0, 0);

    var msg = 'Test finished: ' + errors + ' error found';
    if (errors) {
      console.error(msg);
    } else {
      console.log(msg);
    }
  }
};

Serverboards.add_screen("serverboards.spice/screen", main)
