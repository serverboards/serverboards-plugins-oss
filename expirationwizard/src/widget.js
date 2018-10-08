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
  render(){
    let olayout = this.props.layout
    let layout
    if (olayout.w==1 && olayout.h==2)
      layout="small"
    else if (olayout.w > olayout.h)
      layout="horizontal"
    else
      layout="vertical"

    if (this.state.updating)
      return (
        <Loading>
          {i18n("Updating expirations. This will take long time.")}
          <div className="ui text grey">
            {this.state.updating.label} ({(this.state.updating.progress || 0).toFixed(2)}%)
          </div>
        </Loading>
      )
    if (!this.state.expirations)
      return (
        <Loading>{i18n("Expirations")}</Loading>
      )
    return (
      <div className={`ui expirations ${layout}`} style={{maxHeight: olayout.height}}>
        <Timeline
          expirations={this.state.expirations}
          onShowService={this.handleShowService}
          height={olayout.height}
          />
        <button className="ui button yellow with icon" onClick={this.handleReload}>
          <i className="ui refresh icon"/>
        </button>
      </div>
    )
  }
})


Serverboards.add_widget(`${plugin_id}/widget`, Model, {react: true})
