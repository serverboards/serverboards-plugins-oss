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
    let data = {
      text: content,
      files: this.props.files || []
    }
    let ps = [] // Maybe some promises if there are selected files
    if (this.refs.upload.files.length>0){
      for (let f of this.refs.upload.files){
        let p = new Promise((accept, reject) => {
          let fr = new FileReader()
          fr.onload = function(ev){
            data.files.push( {
              name: f.name,
              data: ev.target.result,
              size: f.size
            } )
            accept()
          }
          fr.readAsDataURL(f)
        })
        console.log(ps)
        ps.push(p)
      }
    }
    Promise.all(ps).then( () => {
      const sdata=JSON.stringify(data)
      const encrypted=crypto.encrypt(password, sdata)
      this.props.onSave( title, encrypted )
    })
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
          <div className="field">
            <label>Uploads</label>
            <input type="file" ref="upload"/>
            <span>Has {(this.props.files || []).length} attachments</span>
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
