const {rpc, React, plugin, Components, Flash} = Serverboards
const plugin_id="serverboards.google.drive"
import Day from './day'

function View(props){
  return (
    <div className="ui google drive">
      {props.days.map( d => (
        <Day key={d.date} {...d}/>
      ))}
    </div>
  )
}

let drive

const DriveWidget = React.createClass({
  getInitialState(){
    return {lines:[], loading: true, link: false}
  },
  update(){
    const folder_filter = this.props.config.folder_filter
      .split(',')
      .map( s => s.trim() )
      .filter( s => s!="" );
    drive.call("get_changes", [this.props.config.service, folder_filter]).then( (changes) => {
      this.setState({lines: changes, loading: false})
    }).catch( (e) => {
      if (e=="invalid_grant"){
        drive.call("authorize_url", [this.props.config.service]).then( (url) => {
          this.props.setError(`Google Drive grant has expired and was not automatically refreshed. Click [here](${url}) to renew.`)
        })
      }
      else{
        this.props.setError(e)
        Flash.error(e)
      }
    })
  },
  componentDidMount(){
    this.props.setClass("ui white card with scroll")
    plugin.start("serverboards.google.drive/daemon")
      .then( function(_drive){
        drive=_drive
      } ).then( this.update )
  },
  render(){
    if (this.state.loading)
      return (
        <Components.Loading>Google Drive Changes</Components.Loading>
      )
    return (
      <View days={this.state.lines}/>
    )
  }
})

Serverboards.add_widget(`${plugin_id}/widget`, DriveWidget, {react: true})
