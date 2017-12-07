const {event, plugin, React, store, cache, Flash, rpc, i18n} = Serverboards
const plugin_id="serverboards.expiration"
import Timeline from './timeline'
const {Loading} = Serverboards.Components
const {merge} = Serverboards.utils

const Model = React.createClass({
  getInitialState(){
    const state = store.getState()
    return {
      updating: false,
      expirations: undefined,
      project: state.project.project,
      service_by_uuid: undefined
    }
  },
  componentDidMount(){
    plugin.start_call_stop("serverboards.expiration/command", "list_expirations", {project: this.state.project.shortname}
      ).then( (expirations) => {
        if (expirations.updating){
          const update_id = event.on(`action.updated`, this.progressUpdate)
          const stop_id = event.on(`action.stopped`, this.progressStop)
          this.setState({updating: {id: expirations.updating, update_id, stop_id}})
        }
        else
          this.setState( {expirations} )
      }).catch( e => {
        Flash.error(e)
      })
    cache.services().then( (services) => {
      let service_by_uuid={}
      services.map( (s) => service_by_uuid[s.uuid]=s )
      this.setState({service_by_uuid})
    })
  },

  progressUpdate(st){
    let id = this.state.updating.id
    if (id == st.uuid)
      this.setState({updating: merge(this.state.updating, {progress: st.progress, label: st.label}) })
  },
  progressStop(st){
    let id = this.state.updating.id
    if (id == st.uuid){
      this.componentWillUnmount() // to stop listening
      this.setState({updating: false})
      this.componentDidMount()
    }
  },
  componentWillUnmount(){
    if (this.state.updating){
      event.off(`action.updated`, this.state.update_id)
      event.off(`action.stopped`, this.state.stop_id)
    }
  },
  handleShowService(serviceid){
    store.goto(`/project/${this.state.project.shortname}/services/${serviceid}`)
  },
  handleReload(){
    Flash.info(i18n("This will take long time"))
    rpc.call("action.trigger_wait", ["serverboards.expiration/update", {}])
      .then( () => { Flash.success("Expirations list updated"); this.componentDidMount() } )
      .catch( (e) => Flash.error(e) )
  },
  getServiceByUUID(uuid){
    return this.state.service_by_uuid[uuid]
  },
  render(){
    if (this.state.updating)
      return (
        <Loading>
          {i18n("Updating expirations. This will take long time.")}
          <div className="ui text grey">
            {this.state.updating.label} ({(this.state.updating.progress || 0).toFixed(2)}%)
          </div>
        </Loading>
      )
    if (!this.state.expirations || !this.state.service_by_uuid)
      return (
        <Loading>{i18n("Expirations")}</Loading>
      )
    return (
      <div className={`ui expirations ${this.props.layout}`}>
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


function main(el, config, extra){
  let layout
  if (extra.layout.width==1 && extra.layout.height==2)
    layout="small"
  else if (extra.layout.width > extra.layout.height)
    layout="horizontal"
  else
    layout="vertical"

  Serverboards.ReactDOM.render(<Model {...config} layout={layout}/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(`${plugin_id}/widget`, main)
