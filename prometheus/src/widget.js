const widget_id = "serverboards.prometheus/widget"
const {React, moment, store, i18n, plugin} = Serverboards
const {Error, Loading} = Serverboards.Components
const {object_is_equal} = Serverboards.utils

class Widget extends React.Component{
  constructor(props){
    super(props)
    const {start, end} = store.getState().project.daterange

    this.state = {
      data: undefined,
      start,
      end,
      error: null,
      loading: true,
      Lines: undefined,
    }
    this.update = this.update.bind(this)
  }
  componentDidMount(){
    this.update()
    store.on("project.daterange.start", this.update)
    store.on("project.daterange.end", this.update)
    plugin.load("serverboards.core.widgets/lines.js")
      .then(() => plugin.do_widget("serverboards.core.widgets/lines"))
      .then( widget => this.setState({"Lines": widget.component}) )
  }
  componentWillUnmount(){
    store.off("project.daterange.start", this.update)
    store.off("project.daterange.end", this.update)
  }
  update(data={}){
    // console.log("Update", data, this.props)
    const config = data.config || this.props.config
    const {start, end} = this.state

    const params = {
      expression: config.expr,
      start: start.format("X"),
      end: end.format("X"),
      step: Math.max(end.diff(start,"seconds") / 256, 14),
      service: config.service,
    }

    plugin.call("serverboards.prometheus/daemon", "get", params)
          .then( (data) => {
      // console.log("Got data", data, params)
      if (data.length==0){
        console.log("No data from %o", params)
        this.setState({error: i18n("No data received"), loading: false})
      }
      else{
        const dt = []
        for (const series of data){
          const cat = series.name
          for (const val of series.values){
            dt.push([cat, moment.unix(val[0]).format("HH:mm:ss"), val[1]])
          }
        }

        this.setState({data: {"columns": ["","",""], "rows": dt}, loading: false})
      }
    }).catch( (error) => {
      this.setState({error, loading: false})
    })
  }
  componentWillReceiveProps(newprops){
    if (!object_is_equal(newprops.config, this.props.config)){
      console.log("new props", newprops.config)
      this.update({config: newprops})
    }
  }
  render(){
    // console.log("render", this.state)
    if (this.state.loading || !this.state.Lines){
      return (
        <Loading/>
      )
    }
    if (this.state.error){
      return (
        <Error>{this.state.error}</Error>
      )
    }
    const Lines = this.state.Lines

    const config = {
      fill: "blue",
      show_legend: "bottom",
      summary: null,
      performance: null,
      data: this.state.data,
      spacing: 100,
    }

    return (
      <this.state.Lines {...this.props} config={config}/>
    )
  }
}

Serverboards.add_widget(widget_id, Widget, {react: true})
