import {basename, hex, get_state, get_servername} from './utils'
const {React, i18n} = Serverboards

class BackupFileRow extends React.Component{
  constructor(props){
    super(props)
    const f = this.props.file
    this.state = {
      servername: undefined,
      filename: f.file_expression,
      datetime: undefined,
      color: 'blue',
      state: 'Gathering information',
      size: undefined,
    }
  }
  componentDidMount(){
    const f=this.props.file
    get_servername(this.props.file.service_uuid).then( (servername) => {
      this.setState({servername})
    })
    get_state({file_expression: f.file_expression, service: f.service_uuid}).then( (state) => this.setState(state) )
  }
  render(){
    const state = this.state
    return (
      <tr style={{cursor:"pointer"}} onClick={this.props.onClick}>
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
        <td title={state.state} style={{textAlign:"right"}} style={{width: 10, height: "100%"}}>
          <i className={`ui label rectangular ${state.color}`}/>
        </td>
      </tr>
    )
  }
}

export default BackupFileRow
