'strict mode';

var rpc = Serverboards.rpc
var Flash = Serverboards.Flash
var plugin = Serverboards.plugin

function main(element, config){
  function open_port(ssh_id, config){
    var url = config.service.config.via.config.url || "localhost"
    var op = rpc.call(ssh_id+".open_port", {url: url, hostname: "localhost", port: port }).then(
      (port) => {
        //console.log("Opened port %o -> localhost:%o", port, config.service.config.port)
        return rpc.call("http.add_port", [port]).then( (uuid) =>  ({uuid: uuid, port: port}) )
      })
    return op
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

  var hostname = "localhost"
  var port = 8080
  var ws_uuid, ssh_id, spice_port
  var port = config.service.config.port || 5900
  var spice_url = "spice://"+hostname+":"+port
  var via=config.service.config.via && config.service.config.via.config.url
  if (config.service.config.remote_desktop){
    spice_url=config.service.config.remote_desktop
    var matches=spice_url.match(/spice:\/\/(.*):(.*)/)
    port=matches[2]
    hostname=matches[1]
  }

  if (via && via!=hostname){
    console.log("Connect via: %o %o",config.service.config.via.config.url, config)
    //spice_url+="?via="+via
  }
  else{
    console.log("No via %o", config)
  }

  $(element).find('#spice-link').attr('href',spice_url)
  rpc.call("plugin.start",["serverboards.core.ssh/daemon"]).then((ssh) => {
      ssh_id = ssh
      return open_port(ssh_id, config)
    }).then( (uuid_port) => {
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
      console.log(iframe)
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
    }
}

Serverboards.add_screen("serverboards.spice/screen", main)
