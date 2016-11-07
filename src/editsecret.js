const {React, Flash} = Serverboards
import crypto from './crypto'

const EditSecret = React.createClass({
  handleEncrypt(){
    const content = $(this.refs.content).val()
    const password = $(this.refs.password).val()
    const title = $(this.refs.title).val()
    if (!password){
      Flash.error("Cant use empty password.")
      return;
    }
    if (password.length<6){
      Flash.error("Password too short! At least 6 characters.")
      return;
    }
    if (password != $(this.refs.password_repeat).val()){
      Flash.error("Passwords do not match!")
      return;
    }
    const encrypted=crypto.encrypt(password, content)
    this.props.onSave( title, encrypted )
  },
  render(){
    const props = this.props
    return (
      <div className="ui text container">
        <div ref="el" className="ui form">
          <div className="field">
            <label>Secret Name</label>
            <input type="text" ref="title" defaultValue={props.title}/>
          </div>
          <div className="field">
            <label>Text</label>
            <textarea id="plain" ref="content" style={{minHeight: "calc( 100vh - 33em )"}} defaultValue={props.content}/>
          </div>
          <div className="inline field">
            <label>Password: </label>
            <input type="password" defaultValue={props.password} ref="password"/>
            <label>&nbsp;Repeat Password: </label>
            <input type="password" defaultValue={props.password} ref="password_repeat"/>
            &nbsp;<button className="ui button yellow" onClick={this.handleEncrypt}>Encrypt</button>
          </div>
        </div>
      </div>
    )
  }
})

export default EditSecret
