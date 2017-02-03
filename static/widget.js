(function(){
  let plugin_id = "serverboards.facebookads"
  let widget_id = plugin_id + "/widget"
  let {plugin} = Serverboards
  let {PieChart, LineGraph} = Serverboards.graphs

  function main(el, config, extra){
    let $el=$('<div>')
    $(el).append($el)
    console.log(config)

    if (config.type=="sum"){
      let graph=new PieChart($el[0])
      graph.update_config({hole: 0.5})

      plugin.start_call_stop(plugin_id+"/command", "get_insights", {insight_id: config.insight, action_breakdown: true}).then( function(data){
        graph.set_data(data)
      }).catch( (e) => graph.set_error(e) )
    }
    else if (config.type=="evolution"){
      let graph=new LineGraph($el[0])

      plugin.start_call_stop(plugin_id+"/command", "get_insights", {insight_id: config.insight, action_breakdown: false}).then( function(data){
        graph.set_data(data)
      }).catch( (e) => graph.set_error(e) )
    }
  }

  Serverboards.add_widget(widget_id, main)
})()
