const React = Serverboards.React
const {goto} = Serverboards.location
import ActionDescription from './actiondescription'

const CronLine = React.createClass({
  render(){
    const props=this.props

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">
          {props.name && (props.name != props.spec) ? (
            <span>{props.name} / </span>
          ) : null}
          {props.spec}
          </div>
          <ActionDescription action={props.action} action_catalog={props.action_catalog}/>
          <a onClick={() => goto(`/serverboard/SBDS/rules/${props.id}`)}>Edit</a>
        </div>
      </div>
    )
  }
})

export default CronLine
