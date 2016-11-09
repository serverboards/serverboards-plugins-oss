(function(){
  let widget_id = "serverboards.prometheus/widget"
  let {rpc, moment, store} = Serverboards
  let {LineGraph} = Serverboards.graphs

  function main(el, config, context){
    //console.log("Prom config is %o", config)
    let prometheus
    let ssh_proxy
    let $el=$('<div>')
    $(el).append($el)

    let graph=new LineGraph($el[0])
    function update(){
      const {start, end} = store.getState().serverboard.daterange
      const params = {
        expression: config.expr,
        start: start.format("X"),
        end: end.format("X"),
        step: Math.max(end.diff(start,"seconds") / 256, 14),

        url: config.service.config.url,
        ssh_proxy: ssh_proxy
      }
      graph.set_loading()

      return rpc.call(prometheus+".get", params).then( (data) => {
        graph.set_data(data)
        context.setTitle(config.expr)
      }).catch( (e) => {
        graph.set_error(e)
      })
    }

    store.on("serverboard.daterange.start", update)
    store.on("serverboard.daterange.end", update)
    let calls=[]
    calls.push(
      rpc.call("plugin.start", ["serverboards.prometheus/daemon"]).then( (prom) => {
        prometheus=prom
      })
    )
    if (config.service.config.via){
      calls.push(
        rpc.call("service.info",[config.service.config.via]).then( (service) => {
          ssh_proxy=service.config.url
          console.log("Setting ssh proxy: %s", ssh_proxy)
        })
      )
    }

    Promise.all(calls).then( () =>
      update()
    )

    return function(){
      if (ssh_proxy)
        // FIXME
        console.warn("Might be leaking SSH proxy ports.")
    }
  }

  Serverboards.add_widget(widget_id, main)
})()
