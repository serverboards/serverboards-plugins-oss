const {React, moment} = Serverboards
const {Calendar} = Serverboards.Components

function TimelineLine({expiration, service, onClick, hasDivider}){
  const date = moment(expiration.date)
  const expired = date.isBefore(moment())
  let style = {paddingLeft: 5, paddingBottom: "1rem"}
  if (hasDivider){
    style.borderTop="1px solid #eee"
    style.paddingTop="1rem"
  }
  return (
    <div className="row"
      key={`${expiration.service}/${expiration.name}/${expiration.date}/${expiration.id}`}
      data-tooltip={`${expiration.name}\n${expiration.description || ""}`}
      style={style}
      >
        <div>
          <a onClick={onClick}><b>{service.name}</b></a> - {date.fromNow()}
        </div><div className={expired ? "ui text red" : ""}>
          {expired ? "Expired" : "Expires" } on {date.format("MMM Do, YY")}
        </div>
    </div>
  )
}

const Timeline = React.createClass({
  getInitialState(){
    let marks = {}
    const now = moment()
    marks[now.format("YYYY-MM-DD")]="bold text teal"

    for (let exp of this.props.expirations){
      marks[moment(exp.date).format("YYYY-MM-DD")]="background light grey"
    }

    return {
      marks,
    }
  },
  render(){
    const {expirations, onShowService, getServiceByUUID, maxHeight} = this.props
    const state = this.state
    return (
      <div>
        <Calendar marks={state.marks} navigation={true}/>
        <div className="ui vertically divided list" style={{overflow:"auto", maxHeight: maxHeight}}>
          {expirations.map( (e, n) => (
            <TimelineLine
              expiration={e}
              service={getServiceByUUID(e.service)}
              onClick={() => onShowService(e.service)}
              hasDivider={n!=0}
              />
          ))}
        </div>
      </div>
    )
  }
})

export default Timeline
