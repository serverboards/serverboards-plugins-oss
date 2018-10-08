(function(){
  let widget_id = "serverboards.prometheus/widget"
  let {rpc, moment, store, i18n, plugin} = Serverboards
  let {LineGraph} = Serverboards.graphs

  function main(el, config, context){
    //console.log("Prom config is %o", config)
    let prometheus = new plugin.PluginCaller("serverboards.prometheus/daemon")
    let $el=$('<div>')
    $(el).append($el)
    const service_id = config.service.uuid || config.service  // from 18.04 services does not provide all data.

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
        service: service_id
      }

      return prometheus.call("get", params).then( (data) => {
        // console.log("Got data", data, params)
        if (data.length==0){
          console.log("No data from %o", params)
          graph.set_error(i18n("No data received"))
        }
        else{
          graph.set_data(data)
          context.setTitle(title)
        }
      }).catch( (e) => {
        graph.set_error(e)
      })
    }

    store.on("project.daterange.start", update)
    store.on("project.daterange.end", update)
    let calls=[]

    if (calls.length>0){
      Promise.all(calls).then( () =>
        update()
      )
    } else {
      update()
    }

    return function(){
      store.off("project.daterange.start", update)
      store.off("project.daterange.end", update)
    }
  }

  Serverboards.add_widget(widget_id, main)
})()
