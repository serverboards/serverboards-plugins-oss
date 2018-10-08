const React = Serverboards.React

const ActionDescription = React.createClass({
  render(){
    const {action, action_catalog} = this.props
    const action_template = action_catalog.find( (a) => a.id == action.action ) || { name: action.action, params: [] }
    const params = action.params || {}
    const params_template = (action_template.extra.call.params || []).filter( (p) => p.card )
    console.log(params, params_template)
    return (
      <div>
        <label className="ui header tiny">{action_template.name}</label>
        {params_template.map( (p) => (
          <div key={p.name}>{p.label}: <span className="meta">{params[p.name]}</span></div>
        ))}
      </div>
    )
  }
})

export default ActionDescription
