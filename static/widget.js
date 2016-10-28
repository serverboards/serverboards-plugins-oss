(function(){
  let widget_id = "serverboards.prometheus/widget"
  let {rpc, moment, store} = Serverboards
  let {LineGraph} = Serverboards.graphs

  function main(el, config){
    let prometheus
    let $el=$('<div>')
    $(el).append($el)

    let graph=new LineGraph($el[0])
    function update(){
      const {start, end} = store.getState().serverboard.daterange
      const params = {
        expression: config.expr,
        start: start.format("X"),
        end: end.format("X"),
        step: Math.max(end.diff(start,"seconds") / 256, 14)
      }
      graph.set_loading()

      return rpc.call(prometheus+".get", params).then( (data) => {
        console.log(data)
        graph.set_data(data)
      }).catch( (e) => {
        graph.set_error(e)
      })
    }

    store.on("serverboard.daterange", update)
    rpc.call("plugin.start", ["serverboards.prometheus/daemon"]).then( (prom) => {
      prometheus=prom
      update()
    })

    console.log("Ready!")
  }

  Serverboards.add_widget(widget_id, main)
})()
