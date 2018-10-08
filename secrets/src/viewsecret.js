const {React, rpc, Flash} = Serverboards
const {MarkdownPreview} = Serverboards.Components
import RequestPassword from './requestpassword'
import EditSecret from './editsecret'
import crypto from './crypto'
const plugin_id="serverboards.secrets"
import FileThumb from './filethumb'

const ViewSecret=React.createClass({
  getInitialState(){
    return {
      text: undefined,
      password: undefined,
      files: [],
      edit: false
    }
  },
  handleOpenEdit(){
    this.setState({edit:true})
  },
  handlePasswordSet(password){
    try{
      const data = JSON.parse( crypto.decrypt(password, this.props.secret) )
      this.setState({
        text: data.text,
        password,
        files: data.files || []
      })
      this.props.onSecretVisible(true)
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
          onSave={this.props.onSave}
          files={this.state.files}
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
        {state.files.length>0 ? (
          <div>
            Attachments:
            <div className="ui three column grid">
              {state.files.map( (f) => (
                <a href={f.data} target="_blank" download={f.name} key={f.name} className="column">
                  <FileThumb {...f}/>
                </a>
              ))}
            </div>
            <div className="ui divider"/>
          </div>
        ) : null }
        <button style={{float: "right"}} className="ui button yellow" onClick={this.handleOpenEdit}>Edit</button>
      </div>
    )
  }
})

export default ViewSecret
