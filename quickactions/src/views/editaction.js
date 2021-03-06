const React = Serverboards.React
const { GenericForm, SectionMenu } = Serverboards.Components
const { i18n } = Serverboards

class EditMenu extends React.Component{
  componentDidMount(){
    let self = this
    $(this.refs.star).checkbox({
      onChecked(){
        self.props.onStar(true)
      },
      onUnchecked(){
        self.props.onStar(false)
      }
    })
    $(this.refs.confirmation).checkbox({
      onChecked(){
        self.props.onUpdateConfirmation(true)
      },
      onUnchecked(){
        self.props.onUpdateConfirmation(false)
      }
    })
  }
  render(){
    const props=this.props
    const action = props.action
    return (
      <React.Fragment>
        <h2 className="ui header padding" style={{paddingLeft: 10}}>Edit {action.name || "action"}</h2>
        <span className="ui item stretch"/>
        <div ref="confirmation" className="field ui toggle checkbox" style={{paddingRight: 10}}>
          <input type="checkbox" defaultChecked={action.confirmation} onChange={(ev) => props.onUpdateConfirmation(ev.target.value)}/>
          <label>{i18n("Require confirmation")}</label>
        </div>
        <div ref="star" className="field ui toggle checkbox">
          <input type="checkbox" defaultChecked={action.star} onChange={(ev) => props.onStar(ev.target.value)}/>
          <label>{i18n("Show at widget")}</label>
        </div>
        <span style={{width: 10}}/>
      </React.Fragment>
    )
  }
}


class EditAction extends React.Component{
  componentDidMount(){
    $(this.refs.form).find('.dropdown').dropdown()
  }
  render(){
    const props=this.props
    const action = props.action
    return (
      <div ref="form" className="ui scroll">
        <SectionMenu menu={EditMenu} {...props}/>

        <div className="ui scroll">
          <div className="ui text container">
            <div className="ui form">
              <div className="four fields">
                <div className="field">
                  <label>Icon Name</label>

                  <div style={{padding: 40, textAlign: "center", border: "1px solid #aaa", margin: "auto", marginBottom: 10}}>
                    <i className={`ui huge blue icon ${action.icon || "help"}`}/>
                  </div>

                  <input type="text" placeholder="Icon name" defaultValue={action.icon} onChange={(ev) => props.onUpdateIcon(ev.target.value)}/>
                </div>
                <div className="field">
                  <label style={{paddingTop: 20}}>Tip:</label>
                  <div className="ui meta">
                    Visit <a target="_blank" href="http://semantic-ui.com/elements/icon.html">
                    Semantic UI icon{"'"}s selection</a> and copy the name of your choice.
                    Then paste it in the input bellow.
                  </div>
                </div>
              </div>

              <div className="two fields">
                <div className="field">
                  <label>Name</label>
                  <input type="text" defaultValue={action.name} onChange={(ev) => props.onUpdateName(ev.target.value)}/>
                </div>
                <div className="field">
                  <label>Description</label>
                  <textarea style={{minHeight: "4em", height: "4em"}} onChange={(ev) => props.onUpdateDescription(ev.target.value)}>{action.description}</textarea>
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Service</label>
                  <select className="ui dropdown search" defaultValue={action.service} onChange={(ev) => props.onServiceChange(ev.target.value)}>
                    <option value=".">No service selected</option>
                    {props.services.map( (s) => (
                      <option key={s.uuid} value={s.uuid}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Action</label>
                  <select className="ui dropdown search" defaultValue={action.action} onChange={(ev) => props.onActionChange(ev.target.value)}>
                    <option value=".">No action selected</option>
                    {Object.values(props.actions).map( (s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <GenericForm fields={props.form_fields} data={action.params} updateForm={props.onUpdateActionParams}/>
            </div>

            <div className="ui buttons" style={{marginTop: 30}}>
              <button onClick={props.onAccept} className="ui teal button">Update quick action</button>
              <button onClick={props.onClose} className="ui grey button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditAction
