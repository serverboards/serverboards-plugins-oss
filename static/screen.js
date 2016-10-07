'strict mode';

var rpc = Serverboards.rpc
var Flash = Serverboards.Flash
var plugin = Serverboards.plugin

function main(element, config){
  var hostname = "localhost"
  var port = 8080
  var ws_uuid, ssh_id, spice_port

  console.log(config)
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
    }).then(() => {
      let iframe=$('<iframe class="ui iframe"/>')
      iframe.attr("src", plugin.join_path("serverboards.spice/spice-web-client/index.html?ws_url="+rpc.url+"/"+ws_uuid))
      console.log(iframe)
      $(element).find('#spice').html(iframe).css('height','100%')
    }).catch( (e) => {
      Flash.error("Error initializating the spice connection.")
      $(element).find('#spice').html( '<div class="ui message error">Error starting spice connection</div>' )
      console.error(e)
    })

    return () => {
      rpc.call(ssh_id+".close_port", [spice_port]).then(() => {
        console.log("Closing spice connection")
      })
    }
}

Serverboards.add_screen("serverboards.spice/screen", main)
