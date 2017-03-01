(function(){
  let plugin_id = "serverboards.facebookads"
  let widget_id = plugin_id + "/widget"
  let {plugin, store, moment} = Serverboards
  let {PieChart, LineGraph} = Serverboards.graphs

  function main(el, config, extra){
    let $el=$('<div>')
    $(el).append($el)
    console.log(config)
    let service = config.service.config
    let graph, params

    if (config.type=="sum"){
      graph=new PieChart($el[0])
      graph.update_config({hole: 0.5})
      params = {insight_id: config.insight, action_breakdown: true, service: service}
    }
    else if (config.type=="evolution"){
      graph=new LineGraph($el[0])
      params = {insight_id: config.insight, action_breakdown: false, service: service}
    }

    function update(){
      const {start, end} = store.getState().project.daterange
      timerange={"since": start.format("YYYY-MM-DD"), "until": end.format("YYYY-MM-DD")}
      params.timerange=timerange
      graph.set_loading()

      plugin.start_call_stop(plugin_id+"/command", "get_insights", params).then( function(data){
        graph.set_data(data)
      }).catch( (e) => graph.set_error(e) )
    }

    store_off_start = store.on("project.daterange.start", update)
    store_off_end =store.on("project.daterange.end", update)
    update()
    return function(){
      store_off_end()
      store_off_start()
    }
  }

  Serverboards.add_widget(widget_id, main)
})()
