const {React} = Serverboards

const Header = React.createClass({
  componentDidMount(){
    $(this.refs.secret_select).dropdown({})
  },
  handleSecretSelect(ev){
    this.props.onSecretSelect(ev.target.value)
  },
  render(){
    const props=this.props
    return (
      <div className="ui top secondary menu">
        <h3 className="ui header">{props.title || "Select Secret"}</h3>
        <div className="right menu">
          <select className="ui dropdown small" name="secret" ref="secret_select" onChange={this.handleSecretSelect}>
            <option value="">Select a secret</option>
            {Object.keys(props.secrets).map( (k) => (
              <option key={k} value={k}>{props.secrets[k]}</option>
            ))}
          </select>
          <a className="item" onClick={props.onSecretAdd}><i className="ui icon add"/></a>
        </div>
      </div>
    )
  }
})
export default Header
