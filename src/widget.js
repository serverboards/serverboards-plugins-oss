const {rpc, React, store} = Serverboards
const plugin_id="serverboards.plugin.serviceheatmap"

const Model = React.createClass({
  getInitialState(){
    return {
      services: store.getState().serverboard.serverboard.services
    }
  },
  updateServices(){
    this.setState( {
      services: store.getState().serverboard.serverboard.services
    } )
  },
  componentDidMount(){
    this.unsubscribe = store.subscribe( () => this.updateServices() )
  },
  componentWillUnmount(){
    this.unsubscribe()
  },
  render(){
    return <View services={this.state.services}/>
  }
})

function View(props){
  return (
    <div className="ui heatmap">
      {props.services.map( (s) => (
        <span
          className={`cell ${Serverboards.utils.colorize(s.tags[0] || "")}`}
          title={`${s.name}: ${s.tags.join(', ')}`}
          data-tooltip={`${s.name}: ${s.tags.join(', ')}`}
          onClick={() => Serverboards.store.goto(`/services/${s.uuid}`)}
          style={{cursor: "pointer"}}
          />
      ) ) }
    </div>
  )
}

function main(el, config){
  Serverboards.ReactDOM.render(<Model/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(`${plugin_id}/widget`, main)
