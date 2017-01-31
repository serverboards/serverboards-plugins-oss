const {rpc, React, store} = Serverboards
const plugin_id="serverboards.plugin.serviceheatmap"

const Model = React.createClass({
  getInitialState(){
    return {
      services: store.getState().serverboard.serverboard.services,
      size: 20
    }
  },
  updateServices(){
    this.setState( {
      services: store.getState().serverboard.serverboard.services
    } )
  },
  componentDidMount(){
    this.unsubscribe = store.subscribe( () => this.updateServices() )
    // This is the initial size, but it will make last row unfilled, butcutted, same last column
    let size = Math.floor( Math.sqrt(
      (this.props.layout.width*this.props.layout.height*280*240) / this.state.services.length
    ) )
    let ok = false
    let per_row, row_count, max_row_count
    while( !ok ){
      per_row = Math.floor( this.props.layout.width * 280 / size )
      max_row_count = Math.floor( this.props.layout.height * 240 / size )
      row_count = Math.ceil( this.state.services.length /  per_row )
      console.log("max w", size, per_row, row_count, max_row_count)
      ok = (row_count <= max_row_count )
      if (!ok)
        size-=1
      if (size<20){
        break;
      }
    }
    this.setState({size: size - 2})
  },
  componentWillUnmount(){
    this.unsubscribe()
  },
  render(){
    return <View services={this.state.services} size={this.state.size}/>
  }
})

function logo(name){
  let ns=name.split(' ')
  if (ns.length>=2){
    return ns.map((n) => n[0]).join('').slice(0,2).toUpperCase()
  }
  return name.slice(0,2).toUpperCase()
}

const Cell = React.createClass({
  componentDidMount(){
    $(this.refs.el).popup({
      position: "bottom center"
    })
  },
  render(){
    const {service, cell_style} = this.props
    const title = `${service.name}: ${service.tags.join(', ')}`
    return (
      <div
        ref="el"
        className={`cell ${Serverboards.utils.colorize(service.tags[0] || "")}`}
        title={title}
        data-content={title}
        onClick={() => Serverboards.store.goto(`/services/${service.uuid}`)}
        style={cell_style}
        >
          {logo(service.name)}
      </div>
      )
  }
})

function View(props){
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
    fontSize: Math.max(props.size/5, 12)
  }
  return (
    <div className="ui heatmap" style={{justifyContent:"center"}}>
      {props.services.map( (s) => (
        <Cell key={s.uuid} service={s} cell_style={cell_style}/>
      ) ) }
    </div>
  )
}

function main(el, config, extra){
  console.log(extra)
  Serverboards.ReactDOM.render(<Model layout={extra.layout}/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(`${plugin_id}/widget`, main)
