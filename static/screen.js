'strict mode';

var rpc = Serverboards.rpc
var Flash = Serverboards.Flash
var plugin = Serverboards.plugin
var cache = Serverboards.cache

function main(element, config){
  function open_port(ssh_id, config){
    return cache.service(config.service.config.via)
      .then( via =>
          (via && via.config.url) || "localhost"
      ).then( url =>
        rpc.call(ssh_id+".open_port", {url: url, hostname: "localhost", port: port })
      ).then( port =>
        rpc.call("http.add_port", [port]).then( (uuid) =>  ({uuid: uuid, port: port}) )
      )
  }

  function open_in_tab(config){
    let w = window.open()
    open_port(config.ssh_id, config).then( (uuid_port) => {
      let url = plugin.join_path("serverboards.spice/spice.html?ws_url="+rpc.url+"/"+uuid_port.uuid)
      console.log(url)
      w.location=url
      // The port stays open, but should be only for limited time.
    }).catch(function(e){
      console.error(e)
    })
  }

  function requestFullscreen(element){
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    else
      console.error("Cant set fullscreen! No method found.")
  }
  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  var hostname = "localhost"
  var port = 8080
  var ws_uuid, ssh_id, spice_port
  var port = config.service.config.port || 5900
  var spice_url = "spice://"+hostname+":"+port
  if (config.service.config.remote_desktop){
    spice_url=config.service.config.remote_desktop
    var matches=spice_url.match(/spice:\/\/(.*):(.*)/)
    port=matches[2]
    hostname=matches[1]
  }

  $(element).find('#spice-fullscreen').on('click', function(){
    requestFullscreen( $(element).find('#fullscreenable')[0] )
  })
  $(element).find('#nofullscreen').on('click', function(){
    exitFullscreen()
  })
  $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function(ev){
    var isFullScreen = document.fullScreen ||
                       document.mozFullScreen ||
                       document.webkitIsFullScreen;
    if (isFullScreen)
      $(element).find('#fullscreenable').addClass("fullscreen")
    else
      $(element).find('#fullscreenable').removeClass("fullscreen")
  })

  if (config.via && config.via!=hostname){
    cache.service(via).then( via =>
      console.log("Connect via: %o %o", via.name, via.config.url)
    )
    //spice_url+="?via="+via
  }
  else{
    console.log("No via %o", config)
  }

  $(element).find('#spice-link').attr('href',spice_url)
  rpc.call("plugin.start",["serverboards.core.ssh/daemon"])
    .then((ssh) =>
      open_port(ssh, config)
    ).then( (uuid_port) => {
      console.log("Connect to ws %o", uuid_port.uuid)
      spice_port = uuid_port.port
      ws_uuid = uuid_port.uuid
    }).then(() => {
      let iframe=$('<iframe class="ui iframe"/>')
      let iframe_url = plugin.join_path("serverboards.spice/spice.html?ws_url="+rpc.url+"/"+ws_uuid)
      $(element).find('#spice-link-tab').on('click',function(){
        open_in_tab({ssh_id: ssh_id, hostname: "localhost", port: port, service: config.service })
      })
      iframe.attr("src", iframe_url)
      $(element).find('#message').hide()
      //console.log(iframe)
      $(element).find('#spice').html(iframe).css('height','100%')
    }).catch( (e) => {
      Flash.error("Error initializating the spice connection.")
      $(element).find('#message').text("Error starting spice connection").addClass('error')
      console.error(e)
    })

    return () => {
      rpc.call(ssh_id+".close_port", [spice_port]).then(() => {
        console.log("Closing spice connection")
      })
      $(document).off("webkitfullscreenchange mozfullscreenchange fullscreenchange")
    }
}

Serverboards.add_screen("serverboards.spice/screen", main)
