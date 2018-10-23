const {React, plugin, Flash} = Serverboards
import View from '../views/list'
import TopMenu from '../views/topmenu'
import EditAction from './editaction'
const {Modal, SectionMenu} = Serverboards.Components
const {merge} = Serverboards.utils

const extra={
  empty_action: {
    id: undefined,
    action: undefined,
    description: "",
    params: {  },
    name: "",
    confirmation: false
  },
}
class ListModel extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      edit: undefined,
      actions: undefined
    }
  }
  componentDidMount(){
    plugin.start_call_stop(`serverboards.optional.quickactions/command`, "list_actions", { project: this.props.project }).then( actions => {
      console.log("got actions: %o", actions)
      this.setState({actions})
    })
  }
  handleRunAction(a){
    if (a.confirmation){
      if (!confirm(a.name + "\n\n" + (a.description || a.confirm || "Are you sure?")))
        return;
    }
    plugin.start_call_stop(`serverboards.optional.quickactions/command`, "run_action", [a.id]).then( () => {
      Flash.info("Sucefully run action "+a.name)
    }).catch( e => Flash.error(e) )
  }
  handleConfigureAction(a){
    this.setState({edit: a})
  }
  handleAcceptEditAction(a){
    plugin.start_call_stop(`serverboards.optional.quickactions/command`, "update_action", [a]).then( (id) => {
      const actions = this.state.actions.map( (ac) => {
        if (ac.id == a.id){
          return a
        }
        return ac
      })
      this.setState({edit: undefined, actions})
      Flash.info("Action updated")
    }).catch( e => Flash.error(e) )
  }
  handleCloseEditAction(){
    this.setState({edit: undefined})
  }
  handleOpenAddAction(){
    this.setState({edit: "add"})
  }
  handleAcceptAddAction(a){
    plugin.start_call_stop(`serverboards.optional.quickactions/command`, "add_action", [a]).then( (id) => {
      Flash.info("Action added")
      this.setState({actions: this.state.actions.concat(merge(a, {id})), edit: undefined})
    }).catch( e => Flash.error(e) )
  }
  render(){
    if (this.state.edit){
      if (this.state.edit=="add")
        return (
          <EditAction
            action={extra.empty_action}
            onAccept={this.handleAcceptAddAction.bind(this)}
            services={this.props.services}
            onClose={this.handleCloseEditAction.bind(this)}
            project={this.props.project}
            />
        )
      else
        return (
          <EditAction
            action={this.state.edit}
            onAccept={this.handleAcceptEditAction.bind(this)}
            services={this.props.services}
            onClose={this.handleCloseEditAction.bind(this)}
            project={this.props.project}
            />
        )
    }
    return (
      <React.Fragment>
        <SectionMenu menu={TopMenu} onAddQuickAction={this.handleOpenAddAction.bind(this)}/>
        <View {...this.props} {...this.state}
          onRunAction={this.handleRunAction.bind(this)}
          onConfigureAction={this.handleConfigureAction.bind(this)}
          onOpenAddAction={this.handleOpenAddAction.bind(this)}
          />
      </React.Fragment>
    )
  }
}

export default ListModel
