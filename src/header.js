const {React} = Serverboards
const {HoldButton} = Serverboards.Components

// mutates the array, does not matter on this use.
function sorted(arr){
  arr.sort()
  return arr
}

const Header = React.createClass({
  componentDidMount(){
    $(this.refs.secret_select).dropdown({})
  },
  handleSecretSelect(ev){
    //console.log("Secret change %o", ev.target.value)
    if (ev.target.value)
      this.props.onSecretSelect(ev.target.value)
  },
  componentWillReceiveProps(newprops){
    //console.log("new props %o, %o: %o", newprops.secret, this.props.secret, newprops.secret != this.props.secret)
    if (newprops.secret != this.props.secret){
      setTimeout( () => {
        if (newprops.secret)
          $(this.refs.secret_select).dropdown('set selected', newprops.secret)
        else
          $(this.refs.secret_select).dropdown('clear')
        }, 20) // Needs to be after updating the list of secrets
    }
  },
  render(){
    const props=this.props
    return (
      <div className="ui top secondary menu">
        <h3 className="ui header">{props.title || "Select Secret"}</h3>
        <div className="right menu">
          { props.onDelete ? (
            <HoldButton className="ui outline button red" onHoldClick={props.onDelete}>Hold to remove</HoldButton>
          ) : null }
          <select className="ui dropdown search small" name="secret" ref="secret_select" onChange={this.handleSecretSelect} value={props.secret}>
            <option value="">Select a secret</option>
            {sorted(Object.keys(props.secrets)).map( (k) => (
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
