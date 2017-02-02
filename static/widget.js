(function(){
  let widget_id = "serverboards.facebookads/widget"
  let {rpc, moment, store} = Serverboards
  let {PieChart} = Serverboards.graphs

  let CDATA= {
  "data": [
    {
      "total_actions": 33,
      "actions": [
        {
          "action_type": "like",
          "value": 2
        },
        {
          "action_type": "link_click",
          "value": 2
        },
        {
          "action_type": "post_like",
          "value": 3
        },
        {
          "action_type": "comment",
          "value": 3
        },
        {
          "action_type": "mobile_app_install",
          "value": 12
        }
      ],
      "date_start": "2009-03-28",
      "date_stop": "2016-04-04"
    }
  ],
  "paging": {
    "cursors": {
      "before": "MAZDZD",
      "after": "MAZDZD"
    }
  }
}

  const id_to_name={
    like: "Likes",
    link_click: "Link clicks",
    post_like: "Post Likes",
    comment: "Comments",
    mobile_app_install: "Mobile App Installations",
  }



  function main(el, config, extra){
    let $el=$('<div>')
    $(el).append($el)

    let data = {}

    $(CDATA.data[0].actions).map( function(n, dt){
      console.log(dt, this)
      let name = dt.action_type
      name=id_to_name[name] || name
      data[name]=dt.value
    })

    let graph=new PieChart($el[0])
    graph.update_config({hole: 0.5})
    graph.set_data(data)
  }

  Serverboards.add_widget(widget_id, main)
})()
