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
      title: undefined,
      secret: undefined,
      secret_id: undefined,
      add: false,
      visible: false
    }
  },
  componentDidMount(){
    rpc.call('plugin.data_keys', [plugin_id, `${this.props.project}.`]).then( (keys) => {
      let secrets={}
      const slicepoint = this.props.project.length + 1
      keys.map( (k) => {
        secrets[k]=k.slice(slicepoint)
      })
      this.setState({secrets})
      if (this.state.secret_id){
        this.handleSecretSelect(this.state.secret_id)
      }
    })
  },
  handleSecretSelect(secret){
    console.log("secret %o", secret )
    rpc.call("plugin.data.get", [plugin_id, secret]).then( (data) => {
      this.setState({secret: data, title: this.state.secrets[secret], secret_id: secret, add: false, visible: false})
    })
  },
  handleAddSecretDialog(){
    this.setState({add: true, title: "Add a new secret", secret_id: undefined})
  },
  handleAddSecret(title, secret){
    let self=this
    const secret_id = `${this.props.project}.${title}`
    rpc.call('plugin.data.update', [plugin_id, secret_id, secret]).then( (res) => {
      console.log("Saved encrypted data: %o: %o", title, res)
      const secrets = utils.merge(this.state.secrets, { [secret_id]: title})
      self.setState({add: false, secret, title, secrets, secret_id})
    }).catch(function(e){
      console.error(e)
      Flash.error("Could not save encrypted secret")
    })
  },
  handleDeleteSecret(){
    const secret_id = this.state.secret_id
    rpc.call("plugin.data.delete", [plugin_id, secret_id]).then( () => {
      console.log("Deleted secret %o", secret_id)
      let secrets = {}
      Object.keys(this.state.secrets).map( (k) => {
        if (k!=secret_id)
          secrets[k]=this.state.secrets[k]
      })
      this.setState({secret_id: undefined, secrets, secret: undefined, title: undefined, visible: false})
    })
  },
  handleTitleChange(oldtitleid, newtitleid, newtitle){
    let secrets = {}
    Object.keys(this.state.secrets).map( (k) => {
      if (k==oldtitleid)
        secrets[newtitleid]=newtitle
      else
        secrets[k]=this.state.secrets[k]
    })
    this.setState({secret_id: newtitleid, secrets, title: newtitle})
  },
  handleSecretVisible(visible=true){
    this.setState({visible})
  },
  handleSave(title, secret){
    rpc.call("plugin.data.update", [plugin_id, `${this.props.project}.${title}`, secret])
      .then( () => {
        if (title!=this.state.title) // remove old one
          return rpc.call("plugin.data.delete", [plugin_id, `${this.props.project}.${this.state.title}`])
      })
      .then( () => this.reload(`${this.props.project}.${title}`) )
      .catch( (e) => {
        console.error(e)
        Flash.error("Error saving secret")
      })
  },
  reload(secret_id = undefined){
    this.setState(this.getInitialState())
    this.setState({secret_id})
    this.componentDidMount()
  },
  render(){
    const props=this.props
    const state=this.state
    return (
      <div id="secrets">
        <Header
          secrets={state.secrets}
          title={state.title}
          secret={state.secret_id}
          onSecretSelect={this.handleSecretSelect}
          onSecretAdd={this.handleAddSecretDialog}
          onDelete={state.visible && this.handleDeleteSecret}
          />
        {state.add ? (
          <EditSecret
            onSave={this.handleAddSecret}
            />
        ) : state.secret ? (
          <ViewSecret
            secret={state.secret}
            title={state.title}
            onSave={this.handleSave}
            onSecretChange={state.handleSecretSelect}
            onSecretVisible={this.handleSecretVisible}
            reload={this.reload}
            />
        ) : (
          <div className="ui text container">No secret selected. Select a secret from the top menu or add one.</div>
        )}
      </div>
    )
  }
})

function main(el, config, extra){
  console.log("secrets config:",config, extra)
  Serverboards.ReactDOM.render(<View project={config.project.shortname}/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_screen(`${plugin_id}/screen`, main)
