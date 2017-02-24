const {rpc, React, plugin, Components} = Serverboards
const plugin_id="serverboards.google.drive"
import Day from './day'

function View(props){
  return (
    <div className="google drive">
      {props.days.map( d => (
        <Day {...d}/>
      ))}
    </div>
  )
}

let drive

const Model = React.createClass({
  getInitialState(){
    return {lines:[], loading: true}
  },
  update(){
    const folder_filter = this.props.config.folder_filter
      .split(',')
      .map( s => s.trim() )
      .filter( s => s!="" );
    drive.call("get_changes", [this.props.config.service.uuid, folder_filter]).then( (changes) => {
      this.setState({lines: changes, loading: false})
    })
  },
  componentDidMount(){
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

function main(el, config, extra){
  extra.setTitle("Google Drive activity")
  $(el).css("overflow", "auto")
  Serverboards.ReactDOM.render(<Model config={config}/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(`${plugin_id}/widget`, main)
