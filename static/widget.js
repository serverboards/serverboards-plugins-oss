(function(){
  let widget_id = "serverboards.prometheus/widget"
  let {rpc, moment, store, i18n} = Serverboards
  let {LineGraph} = Serverboards.graphs

  function main(el, config, context){
    //console.log("Prom config is %o", config)
    let prometheus
    let ssh_proxy
    let $el=$('<div>')
    let url="http://localhost:9090"
    $(el).append($el)

    let graph=new LineGraph($el[0])
    function update(){
      const {start, end} = store.getState().project.daterange
      let title
      {
        const has_title=config.expr.indexOf(':') < 20
        if (has_title){
          title=config.expr.split(':')[0]
        }
        else{
          title="Prometheus"
        }
      }

      const params = {
        expression: config.expr,
        start: start.format("X"),
        end: end.format("X"),
        step: Math.max(end.diff(start,"seconds") / 256, 14),

        url: url,
        ssh_proxy: ssh_proxy
      }

      return rpc.call(prometheus+".get", params).then( (data) => {
        console.log("Got data", data, params)
        if (data.length==0){
          graph.set_error(i18n("No data data received"))
        }
        else{
          graph.set_data(data)
          context.setTitle(title)
        }
      }).catch( (e) => {
        graph.set_error(e)
      })
    }

    store_off_start = store.on("project.daterange.start", update)
    store_on_start = store.on("project.daterange.end", update)
    let calls=[]
    calls.push(
      rpc.call("plugin.start", ["serverboards.prometheus/daemon"]).then( (prom) => {
        prometheus=prom
      })
    )
    if (config.service){
      url = config.service.config.url
      if (config.service.config.via){
        calls.push(
          rpc.call("service.get",[config.service.config.via]).then( (service) => {
            ssh_proxy=service.config.url
            console.log("Setting ssh proxy: %s", ssh_proxy)
          })
        )
      }
    }

    Promise.all(calls).then( () =>
      update()
    )

    return function(){
      if (ssh_proxy){
        // FIXME
        console.warn("Might be leaking SSH proxy ports.")
      }
      store_on_start()
      store_off_start()
    }
  }

  Serverboards.add_widget(widget_id, main)
})()
