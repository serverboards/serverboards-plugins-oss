const {rpc, React} = Serverboards
let plugin_id="serverboards.optional.quickactions"
import ActionList from './model/list'

function View(props){
  return (
    <ActionList
      project={props.project.shortname}
      />
  )
}

function main(el, config){
  Serverboards.ReactDOM.render(<View {...config}/>, el)
  plugin_id = config.plugin

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_screen(`${plugin_id}/editor`, main)
