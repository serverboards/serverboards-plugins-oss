const {React, rpc, Flash} = Serverboards
const {MarkdownPreview} = Serverboards.Components
import RequestPassword from './requestpassword'
import EditSecret from './editsecret'
import crypto from './crypto'
const plugin_id="serverboards.secrets"

const ViewSecret=React.createClass({
  getInitialState(){
    return {
      text: undefined,
      password: undefined,
      edit: false
    }
  },
  handleSave(title, secret){
    if (title!=this.props.title){
      Flash.info("Changing secret name is not yet supported")
    }
    rpc.call("plugin.data_set", [plugin_id, `text.${this.props.title}`, secret])
      .then( () => this.setState({edit: false, text: undefined, password: undefined }) )
      .catch( (e) => {
        console.error(e)
        Flash.error("Error saving secret")
      })
  },
  handleOpenEdit(){
    this.setState({edit:true})
  },
  handlePasswordSet(password){
    try{
      const text = crypto.decrypt(password, this.props.secret)
      this.setState({text, password})
      //this.props.onSecretSelect(`text.${this.props.title}`)
    }
    catch(e){
      console.error(e)
      Flash.error("Invalid password. Try again.")
    }
  },
  componentWillReceiveProps(newprops){
    if (newprops.secret != this.props.secret)
      this.setState(this.getInitialState())
  },
  render(){
    const state=this.state
    if (state.edit)
      return (
        <EditSecret
          password={state.password}
          content={state.text}
          title={this.props.title}
          onSave={this.handleSave}
          />
      )
    if (!state.password)
      return (
        <RequestPassword onPasswordSet={this.handlePasswordSet}/>
      )
    return (
      <div className="ui text container">
        <MarkdownPreview value={state.text}/>
        <div className="ui divider"/>
        <button className="ui button yellow" onClick={this.handleOpenEdit}>Edit</button>
      </div>
    )
  }
})

export default ViewSecret
