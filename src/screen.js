const React = Serverboards.React
const plugin_id = "serverboards.cron"
const rpc = Serverboards.rpc
const {is_empty} = Serverboards.utils
const {goto} = Serverboards.location

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
  handleAddRule(){
    goto(`/serverboard/${this.props.serverboard.shortname}/rules/add`, {trigger: `${plugin_id}/trigger`})
  },
  render(){
    const {cronlines, action_catalog} = this.state

    if (!cronlines || !action_catalog){
      const Loading = Serverboards.Components
      return (
        <Loading>Cron info</Loading>
      )
    }
    return (
      <div className="ui container">
        <h1 className="ui header">Cron manager</h1>
        <div className="ui cards">
          {cronlines.sort( (a,b) => (a.spec.localeCompare(b.spec)) ).map( (cl) => (
            <CronLine key={cl.id} serverboard={this.props.serverboard.shortname} action_catalog={action_catalog}{...cl}/>
          ))}
        </div>
        <a className="ui massive button _add icon floating pink" onClick={this.handleAddRule}>
          <i className="add icon"></i>
        </a>
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
