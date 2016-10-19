const React = Serverboards.React
const plugin_id = "serverboards.cron"
const rpc = Serverboards.rpc
const {is_empty} = Serverboards.utils

import CronLine from './cronline'

const Manager = React.createClass({
  getInitialState(){
    return {
      cronlines: undefined,
      action_catalog: undefined
    }
  },
  componentDidMount(){
    rpc.call('rules.list', {serverboard:this.props.serverboard.shortname}).then( (rules) =>
      rules
        .filter( (r) => r.trigger.trigger == plugin_id+'/trigger' )
        .map( (r) => ({
          id: r.uuid,
          spec: r.trigger.params.timespec,
          name: r.name,
          action: r.actions.tick,
          is_active: r.is_active
        }) )
    ).then( (cronlines) =>
      this.setState({cronlines})
    ).catch( (e) => {
      console.error(e)
      Serverboards.Flash.error(JSON.stringify(e))
    })
    const action_catalog = Serverboards.store.getState().action.catalog
    if (!is_empty(action_catalog))
      this.setState({action_catalog})
    else{
      rpc.call("action.filter",{}).then( (actions) => {
        this.setState({action_catalog: actions})
      })
    }
  },
  render(){
    const {cronlines, action_catalog} = this.state

    if (!cronlines || !action_catalog){
      return (
        <Serverboards.Components.Loading>Cron info</Serverboards.Components.Loading>
      )
    }
    return (
      <div className="ui container">
        <h1 className="ui header">Cron manager</h1>
        <ul>
          {cronlines.sort( (a,b) => (a.spec.localeCompare(b.spec)) ).map( (cl) => (
            <CronLine key={cl.id} action_catalog={action_catalog}{...cl}/>
          ))}
        </ul>
      </div>
    )
  }
})

function main(el, config){
  Serverboards.ReactDOM.render(React.createElement(Manager, {serverboard: config.serverboard}), el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_screen(plugin_id+"/screen", main)
