const {rpc, React, Flash, utils} = Serverboards
const plugin_id="serverboards.secrets"

import Header from './header'
import ViewSecret from './viewsecret'
import EditSecret from './editsecret'
import crypto from './crypto'

const View = React.createClass({
  getInitialState(){
    return {
      secrets: {},
      title: "--",
      secret: undefined,
      add: false
    }
  },
  componentDidMount(){
    rpc.call('plugin.data_keys', [plugin_id, `text.`]).then( (keys) => {
      let secrets={}
      keys.map( (k) => {
        secrets[k]=k.slice(5)
      })
      this.setState({secrets})
    })
  },
  handleSecretSelect(secret){
    rpc.call("plugin.data_get", [plugin_id, secret]).then( (data) => {
      this.setState({secret: data, title: this.state.secrets[secret]})
    })
  },
  handleAddSecretDialog(){
    this.setState({add: true})
  },
  handleAddSecret(title, secret){
    let self=this
    rpc.call('plugin.data_set', [plugin_id, `text.${title}`, secret]).then( (res) => {
      console.log("Saved encrypted data: %o: %o", title, res)
      const secrets = utils.merge(this.state.secrets, { [`text.${title}`]: title})
      self.setState({add: false, secret, title, secrets})
    }).catch(function(e){
      console.error(e)
      Flash.error("Could not save encrypted secret")
    })
  },
  render(){
    const props=this.props
    const state=this.state
    return (
      <div id="secrets">
        <Header
          secrets={state.secrets}
          title={state.title}
          onSecretSelect={this.handleSecretSelect}
          onSecretAdd={this.handleAddSecretDialog}
          />
        {state.add ? (
          <EditSecret
            onSave={this.handleAddSecret}
            />
        ) : state.secret ? (
          <ViewSecret
            secret={state.secret}
            title={state.title}
            onSecretChange={state.handleSecretSelect}
            />
        ) : (
          <div className="ui text container">No secret selected. Select a secret from the top menu or add one.</div>
        )}
      </div>
    )
  }
})

function main(el, config){
  Serverboards.ReactDOM.render(<View/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_screen(`${plugin_id}/screen`, main)
