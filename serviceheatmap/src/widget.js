const {rpc, React, store, i18n} = Serverboards
const plugin_id="serverboards.plugin.serviceheatmap"

const Model = React.createClass({
  getInitialState(){
    return {
      services: store.getState().project.project.services,
      size: 20
    }
  },
  updateServices(){
    this.setState( {
      services: store.getState().project.project.services
    } )
  },
  componentWillReceiveProps(newprops){
    if (!Serverboards.utils.object_is_equal(newprops, this.props))
      this.componentDidMount(newprops)
  },
  componentDidMount(props){
    if (!props)
      props = this.props

    this.unsubscribe = store.subscribe( () => this.updateServices() )
    console.log(this.props)
    // This is the initial size, but it will make last row unfilled, butcutted, same last column
    const layout = props.layout
    let size = Math.floor( Math.sqrt(
      ((layout.width - 10)*(layout.height - 55)) / this.state.services.length
    ) )
    let ok = false
    let per_row, row_count, max_row_count
    let i = 0;
    while( !ok ){
      per_row = Math.floor( layout.width / (size+2) )
      max_row_count = Math.floor( layout.height / (size+2) )
      row_count = Math.ceil( this.state.services.length /  per_row )
      ok = (row_count <= max_row_count )
      if (!ok)
        size-=5
      if (size<20){
        break;
      }
      if (size != size){
        console.error("Error calculating size! NaN")
        size = 30 // A default size
        break
      }

      i+=1
      if (i>50)
        ok = true
    }
    this.setState({size: size - 2})
  },
  componentWillUnmount(){
    this.unsubscribe()
  },
  render(){
    const size = this.state.size
    return <View services={this.state.services} size={size}/>
  }
})

function logo(name){
  let ns=name.split(' ')
  if (ns.length>=2){
    return ns.map((n) => n[0]).join('').slice(0,2).toUpperCase()
  }
  return name.slice(0,2).toUpperCase()
}

function service_status(tags){
  // console.log(tags)
  const s = tags.filter(s => s.startsWith("status:")).map( s => s.slice(7) )
  if (s.length>0)
    return s[0]
  if (tags.length>0)
    return tags[0]
  return ""
}

const Cell = React.createClass({
  componentDidMount(){
    $(this.refs.el).popup({
      position: "bottom center"
    })
  },
  gotoService(){
    $(this.refs.el).popup("destroy")
    Serverboards.store.goto(`/services/${this.props.service.uuid}`)
  },
  render(){
    const {service, cell_style} = this.props
    const title = `${service.name}: ${service.tags.join(', ') || i18n("Status not set")}`
    return (
      <div
        ref="el"
        className={`cell ${Serverboards.utils.colorize(service_status(service.tags))}`}
        title={title}
        data-content={title}
        onClick={this.gotoService}
        style={cell_style}
        >
          {logo(service.name)}
      </div>
      )
  }
})

function View(props){
  const fontSize =  Math.max(props.size/5, 12)
  const cell_style = {
    width: props.size,
    minWidth: props.size,
    height: props.size,
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "white",
    padding: "5px 10px",
    fontSize,
    lineHeight: fontSize + "px"
  }
  return (
    <div className="ui heatmap" style={{justifyContent:"flex-start", alignContent: "flex-start", paddingLeft: 1, paddingTop: 2}}>
      {props.services.map( (s) => (
        <Cell key={s.uuid} service={s} cell_style={cell_style}/>
      ) ) }
    </div>
  )
}

Serverboards.add_widget(`${plugin_id}/widget`, Model, {react: true})
