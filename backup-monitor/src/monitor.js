import BackupFileRow from './backupfilerow'
const {React, rpc, i18n, store} = Serverboards
const {map_get} = Serverboards.utils

const plugin_id = 'serverboards.backup.monitor'


class Widget extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      files:[]
    }
  }
  componentDidMount(){
    rpc.call("rules_v2.list", {project: this.props.project}).then( (list) => {
      const files = list
        .filter( (el) => el.from_template == `${plugin_id}/rule.backup.monitoring` && el.is_active )
        .map( (el) => ({
          is_active: el.is_active,
          file_expression: map_get(el, ["rule", "template_data", "filename"]),
          service_uuid: map_get(el, ["rule", "template_data", "service"]),
          uuid: el.uuid
        }))
      // console.log("Got rules ", list, " and filtered ", files)
      this.setState({files})
    })
  }
  render(){
    const props=this.props
    const state=this.state

    if (state.files.length == 0){
      return (
        <div>
          {i18n("No backups are being watched.")}
        </div>
      )
    }

    return (
      <table className="ui very basic selectable table">
        <tbody>
          {state.files.map( (f) => (
            <BackupFileRow
              file={f}
              onClick={() => store.goto(`/project/${props.project}/rules_v2/${f.uuid}`)}
              />
          ))}
        </tbody>
      </table>
    )
  }
}



Serverboards.add_widget(plugin_id+"/monitor", Widget, {react: true})
