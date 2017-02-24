const {rpc, React, plugin} = Serverboards
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
    drive.call("get_changes", [this.props.config.service.uuid]).then( (changes) => {
      console.log(changes)
      this.setState({lines: changes})
    })
  },
  componentDidMount(){
    plugin.start("serverboards.google.drive/daemon")
      .then( function(_drive){
        drive=_drive
      } ).then( this.update )
  },
  render(){
    return (
      <View days={this.state.lines}/>
    )
  }
})

function main(el, config, extra){
  extra.setTitle("Google Drive activity")
  Serverboards.ReactDOM.render(<Model config={config}/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget(`${plugin_id}/widget`, main)
