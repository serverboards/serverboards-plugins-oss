const {React, rpc, Flash} = Serverboards
const {MarkdownPreview} = Serverboards.Components
import RequestPassword from './requestpassword'
import EditSecret from './editsecret'
import crypto from './crypto'
const plugin_id="serverboards.secrets"

const preseticons={
  "document": "file text",
  "text": "file text",
  "application/vnd.oasis.opendocument.spreadsheet" : "file excel outline",
  "image": "file image"
}
const icon_style={
  verticalAlign: "top"
}
function PreviewFile(props){
  let type=props.data.slice(5, props.data.indexOf(';'))
  console.log(props.data.slice(0, 20), type)
  switch(type){
    case "image/gif":
    case "image/svg":
    case "image/png":
    case "image/jpg":
    case "image/jpeg":
      return (
        <img src={props.data} className="ui top aligned avatar image"/>
      )
  }
  if (preseticons[type])
    return (
      <i style={icon_style} className={`icon big black ${preseticons[type]}`}/>
    )
  type=type.slice( type.indexOf('/') )
  if (preseticons[type])
    return (
      <i style={icon_style} className={`icon big black ${preseticons[type]}`}/>
    )
  return (
    <i style={icon_style} className={`icon big black file`}/>
  )
}

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
                  <PreviewFile {...f}/>
                  <div style={{display: "inline-block"}}>
                    <div>{f.name}</div>
                    <div className="ui meta">{f.size || `~ ${f.data.length*3/4}`} bytes</div>
                  </div>
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
