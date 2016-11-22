import {basename, hex, get_state, get_servername} from './utils'
const {React, rpc} = Serverboards

const plugin_id = 'serverboards.backup.monitor'

const Widget = Serverboards.React.createClass({
  getInitialState(){
    return {
      files:[]
    }
  },
  componentDidMount(){
    rpc.call("rules.list", {serverboard: this.props.config.serverboard.shortname}).then( (list) => {
      const files = list
        .filter( (el) => el.trigger.trigger == `${plugin_id}/file_exists` && el.is_active )
        .map( (el) => ({
          is_active: el.is_active,
          file_expression: el.trigger.params.file_expression,
          service_uuid: el.service,
          uuid: el.uuid
        }))
      this.setState({files})
    })
  },
  render(){
    const props=this.props
    const state=this.state

    return (
      <table className="ui very basic selectable table">
        <tbody>
          {state.files.map( (f) => (
            <BackupFileRow file={f}/>
          ))}
        </tbody>
      </table>
    )
  }
})


const BackupFileRow = React.createClass({
  getInitialState(){
    const f = this.props.file
    return {
      servername: undefined,
      filename: f.file_expression,
      datetime: undefined,
      color: 'blue',
      state: 'Gathering information',
      size: undefined,
    }
  },
  componentDidMount(){
    const f=this.props.file
    get_servername(this.props.file.service_uuid).then( (servername) => {
      this.setState({servername})
    })
    get_state({file_expression: f.file_expression, service: f.service_uuid}).then( (state) => this.setState(state) )
  },
  render(){
    const state = this.state
    return (
      <tr style={{cursor:"pointer"}}>
        <td style={{padding: "10px 10px"}}>
          <div
            className="ui oneline"
            data-tooltip={state.filename}
            title={state.filename}
            >
            {state.filename}
          </div>
          <div className="ui meta">{state.servername}</div>
        </td>
        <td style={{width:100}}>
          {state.state == "Ok" ? (
            <div><b style={{fontSize:"1.1em"}}>OK</b></div>
          ) : (
            <div className={`ui text ${state.color}`}><b>{state.state}</b></div>
          )}
          <div><b>{state.size ? `${state.size.toFixed(2)} MB` : ''}</b></div>
          <div className="ui oneline" style={{fontSize:"12px", color: "#666"}}>{state.datetime}</div>
        </td>
        <td title={state.state} style={{textAlign:"right"}} style={{width: 10}}>
          <i className={`ui label rectangular ${state.color}`}/>
        </td>
      </tr>
    )
  }
})

function main(el, config){
  Serverboards.ReactDOM.render(React.createElement(Widget, {config}), el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(plugin_id+"/watcher", main)
