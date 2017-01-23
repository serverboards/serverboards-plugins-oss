const {plugin, React, store, cache, Flash} = Serverboards
const plugin_id="serverboards.expiration"
import Timeline from './timeline'
const {Loading} = Serverboards.Components

const Model = React.createClass({
  getInitialState(){
    const state = store.getState()
    console.log(state)
    return {
      expirations: undefined,
      serverboard: state.serverboard.serverboard,
      service_by_uuid: undefined
    }
  },
  componentDidMount(){
    plugin.start_call_stop("serverboards.expiration/command", "list_expirations", [])
      .then( (expirations) => this.setState( {expirations} ) )
    cache.services().then( (services) => {
      let service_by_uuid={}
      services.map( (s) => service_by_uuid[s.uuid]=s )
      this.setState({service_by_uuid})
    })
  },
  handleShowService(serviceid){
    store.goto(`/serverboard/${this.state.serverboard.shortname}/services/${serviceid}`)
  },
  handleReload(){
    Flash.info("This will take long time")
    plugin.start_call_stop("serverboards.expiration/command", "update_expirations", [])
      .then( () => { Flash.info("Expiration updated"); this.componentDidMount() } )
      .catch( (e) => Flash.error(e) )
  },
  getServiceByUUID(uuid){
    return this.state.service_by_uuid[uuid]
  },
  render(){
    if (!this.state.expirations || !this.state.service_by_uuid)
      return (
        <Loading>Expirations</Loading>
      )
    return (
      <div>
        <Timeline
          expirations={this.state.expirations}
          onShowService={this.handleShowService}
          getServiceByUUID={this.getServiceByUUID}
          />
        <button className="ui button yellow with icon" onClick={this.handleReload}>
          <i className="ui refresh icon"/>
        </button>

      </div>
    )
  }
})


function main(el, config){
  Serverboards.ReactDOM.render(<Model {...config}/>, el)

  $(el).css({overflow:"auto"})

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(`${plugin_id}/widget`, main)
