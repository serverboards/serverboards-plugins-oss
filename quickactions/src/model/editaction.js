const {React, cache} = Serverboards
import View from '../views/editaction'
const {Loading} = Serverboards.Components
const merge = Serverboards.utils.merge

class EditActionModel extends React.Component{
  constructor(props){
    super(props)

    const service_id = props.action.service
    const service = services && services.find( (s) => s.uuid == service_id )

    this.state = {
      actions: undefined,
      action: merge(this.props.action, {}),
      action_template: undefined,
      service,
      form_fields: [],
    }
  }
  componentDidMount(){
    const props = this.props
    const project = props.project

    cache.action_catalog().then( actions => {
      const action_id = props.action.action
      const action_template=actions[action_id]
      this.setState({ actions, action_template })
      this.updateFormFields(action_template)
    })
  }
  handleActionChange(action_id){
    const action_template = this.findActionTemplate(action_id)
    this.setState({action_template, action: merge(this.state.action, {action: action_id})})
    this.updateFormFields(action_template)
  }
  updateFormFields(action_template){
    if (!action_template)
      this.setState({form_fields: []})
    else{
      let form_fields = action_template.extra.call.params
      const service = this.state.service
      if (service != undefined){
        const service_params = Object.keys(service.config)
        form_fields = form_fields.filter( (p) => service_params.indexOf(p.name)<0 )
      }
      this.setState({form_fields})
    }
  }
  handleServiceChange(service_id){
    const service = this.findService(service_id)
    this.setState({service, action: merge(this.state.action, {service: service_id})})
    this.updateFormFields(this.state.action_template, service)
  }
  findActionTemplate(action_id){
    return this.state.actions[action_id]
  }
  findService(service_id){
    return this.state.services.find( (s) => s.uuid == service_id )
  }
  handleAcceptChanges(){
    console.log(this.state.action)
    this.props.onAccept(this.state.action)
  }
  updateAction(changes){
    console.log(changes)
    this.setState({action: merge(this.state.action, changes)})
  }
  render(){
    if (!this.state.actions || !this.state.services)
      return (
        <Loading>Actions and services</Loading>
      )
    return (
      <View {...this.props} {...this.state}
        onActionChange={this.handleActionChange.bind(this)}
        onServiceChange={this.handleServiceChange.bind(this)}
        onUpdateActionParams={(params) => this.updateAction({params})}
        onAccept={this.handleAcceptChanges.bind(this)}
        onUpdateDescription={(description) => this.updateAction({description})}
        onUpdateName={(name) => this.updateAction({name})}
        onUpdateConfirmation={(confirmation) => this.updateAction({confirmation})}
        onStar={(star) => this.updateAction({star})}
        onUpdateIcon={(icon) => this.updateAction({icon})}
        />
    )
  }
}

export default EditActionModel
