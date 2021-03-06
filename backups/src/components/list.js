const {i18n, React, utils, Components} = Serverboards
import DetailsTab from './detailstab'
import {calculate_size} from '../utils'

class Toggle extends React.Component{
  componentDidMount(){
    const onChange = this.props.onChange
    if (!onChange)
      return
    $(this.refs.el).checkbox({
      onChecked(){
        console.log("on")
        onChange(true)
      },
      onUnchecked(){
        console.log("off")
        onChange(false)
      },
    })
  }
  render(){
    return (
      <div className="ui input checkbox toggle" ref="el">
        <input type="checkbox" defaultChecked={this.props.isOn}/>
        <label>{this.props.text}</label>
      </div>
    )
  }
}

function Backup({backup, className, onClick, onChangeEnable}){
  const size = calculate_size(backup.size)

  const status = backup.status || "pending"

  return (
    <div className={`ui narrow card ${className || ""}`} onClick={onClick} style={onClick && {cursor:"pointer"}}>
      <div className="header">
        <i className="ui pink disk outline icon"/>
        <div className="ui right text label">
          {status}
          <span className={`ui rectangular label ${utils.colorize(status || "")}`}/>
        </div>
      </div>
      <div className="content">
        <h3 className="ui header" style={{marginBottom: 0}}>{backup.name}</h3>
        <div className="ui meta">{(backup.description || "").split('\n')[0]}</div>
        {backup.completed_date ? (
          <div>
            <div>{i18n("Completed on:")}</div>
            <b>{backup.completed_date}</b>
          </div>
        ) : (
          <div>
            <div>{i18n("Backup pending")}</div>
          </div>
        )}
        {size.size ? (
          <div className="ui centered huge blue text" style={{paddingTop: 10}}>
            {size.size.toFixed(2)} <span className="ui big text">{size.unit}</span>
          </div>
        ) : status=="error" ? (
          <Components.Error>{i18n("Backup error")}</Components.Error>
        ) : status=="running" ? (
          <div style={{paddingTop:20}}>
            <div className="ui text teal small header">{i18n("Backup in progress...")}</div>
            <div className="ui teal active progress">
              <div className="bar" style={{transitionDuration: "300ms", width: "100%"}}/>
            </div>
          </div>
        ) : (
          <div className="ui centered huge grey text" style={{paddingTop: 10}}>
            0.00 <span className="ui big text">B</span>
          </div>
        )}
      </div>
      <div className="extra content">
        <Toggle text="" onChange={onChangeEnable} isOn={backup.enabled}/>
        <div className="right">
          <a>
            <i className="ui horizontal ellipsis teal icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}

function List(props){
  const current =  props.backups && props.backups.find( b => b.id == props.current )
  return (
    <div className="ui expand two column grid with grey background expand">
      <div className="ui column">
        <div className="ui white background round pane">
          <div className="ui attached top form">
            <div className="ui input seamless white">
              <i className="icon search"/>
              <input type="text" onChange={(ev) => this.setFilter(ev.target.value)} placeholder={i18n("Filter...")}/>
            </div>
          </div>
          <div className="ui expand with scroll">
            <div className="ui cards with padding">
              {props.backups && props.backups.map( b => (
                <Backup
                  key={b.id}
                  backup={b}
                  className={props.current == b.id ? "selected" : null}
                  onClick={() => props.setCurrent(b.id)}
                  onChangeEnable={(enabled) => props.onChangeEnable(b.id, enabled)}
                  />)
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ui column">
        <div className="ui white background round pane">
          {current ? (
            <DetailsTab
              key={current.id}
              backup={current}
              {...props}
              />
          ) : (
            <Components.Tip
              className="padding"
              subtitle={i18n("A project without backups is a disaster waiting to happen.")}
              description={i18n("Add and plan your backups selecting a source of the data, and where are you going to store it.\n\nThere is no recovery functionality just yet, but you should to recovery tests from time to time.\n\nAny failed backup can be configured to create an issue and notify the users, so actions can be done to fix the backup.")}
              />
          )}
        </div>
      </div>
    </div>
  )
}

export default List
