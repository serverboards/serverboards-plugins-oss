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

function View(props){
  const style = {
    width: props.size,
    minWidth: props.size,
    height: props.size,
    cursor: "pointer"
  }
  return (
    <div className="ui heatmap" style={{justifyContent:"center"}}>
      {props.services.map( (s) => (
        <span
          className={`cell ${Serverboards.utils.colorize(s.tags[0] || "")}`}
          title={`${s.name}: ${s.tags.join(', ')}`}
          data-tooltip={`${s.name}: ${s.tags.join(', ')}`}
          onClick={() => Serverboards.store.goto(`/services/${s.uuid}`)}
          style={style}
          />
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
